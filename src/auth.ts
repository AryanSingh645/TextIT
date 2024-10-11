import dbConnect from "@/db/dbConnect";
import User from "@/models/User.models";
import NextAuth from "next-auth"
import authConfig from "./auth.config";
import { GoogleProfile } from "next-auth/providers/google";


export const { signIn, signOut, auth, handlers } = NextAuth({
    ...authConfig,
    callbacks: {
        async signIn({ user, account, profile }): Promise<any> {
            await dbConnect();
            try {
                if(user && account?.provider == "credentials") return true;
                else if (account?.provider == "google") {
                    const googleProfile = profile as GoogleProfile;
                    console.log(googleProfile);
                    if (!googleProfile?.email_verified) {
                        return false;
                    }
                    const existingUser = await User.findOne({
                        email: googleProfile.email,
                    });
                    if (existingUser) {
                        existingUser.oauthProvider = "google";
                        await existingUser.save();
                        return true;
                    }
                    const newUser = await User.create({
                        username: googleProfile.email.split("@")[0],
                        email: googleProfile.email,
                        fullName: googleProfile.name,
                        oauthProvider: "google",
                        isVerified: true,
                    });
                    console.log(googleProfile.id, "google profile id created");
                    if (!newUser) {
                        return false;
                    }
                    return true;
                } else if (account?.provider == "github") {
                    const githubProfile = profile;
                    console.log("githubprofile", githubProfile);
                    const existingUser = await User.findOne({
                        email: githubProfile!.email,
                    });
                    if (existingUser) {
                        existingUser.oauthProvider = "github";
                        await existingUser.save();
                        return true;
                    }
                    const newUser = await User.create({
                        username: githubProfile!.email!.split("@")[0],
                        email: githubProfile!.email,
                        fullName: githubProfile!.name,
                        oauthProvider: "github",
                        isVerified: true,
                    });
                    if (!newUser) {
                        return false;
                    }
                    return true;
                }
            } catch (error) {
                console.log("Error in sign in callback", error);
                return false;
            }
        },
        async jwt({ token, user, account, profile }) {
            if (user) {
                token._id = user._id?.toString();
                token.fullName = user.fullName;
                token.isVerified = user.isVerified;
                token.username = user.username;
                token.avatar = user.avatar;
                console.log("inside token callback");
            }
            return token;
        },
        async session({ token, session }: { token: any, session: any }) {
            console.log("inside session callback");
            if (token) {
                session.user._id = token._id;
                session.user.fullName = token.fullName;
                session.user.isVerified = token.isVerified;
                session.user.username = token.username;
                session.user.avatar = token.avatar;
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/sign-in",
        error: "/auth/error",
    },
});