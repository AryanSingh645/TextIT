import dbConnect from "@/db/dbConnect";
import User from "@/models/User.models";
import { NextAuthOptions} from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter"
import clientPromise from "@/lib/db";


const authOptions : NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            id: 'credentials',
            credentials:{
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials : any) : Promise<any>{
                await dbConnect();
                try {
                    const user = await User.findOne({
                        $or:[
                            {email: credentials.identifier},
                            {username: credentials.identifier}
                        ]
                    })
                    if(!user){
                        throw new Error('User not found');
                    }
                    if(!user.isVerified){
                        throw new Error("Please verify your account before logging in");
                    }
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password? user.password : "");
                    if(isPasswordCorrect){
                        return user;
                    }
                    else{
                        throw new Error("Incorrect password");
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
    ],
    callbacks:{
        async signIn({user, account, profile}): Promise<any>{
            await dbConnect();
            try {
                if(account?.provider == "google"){
                    const googleProfile = profile as GoogleProfile;
                    console.log(googleProfile)
                    if(!googleProfile?.email_verified){
                        return false;
                    }
                    const existingUser = await User.findOne({email: googleProfile.email});
                    if(existingUser){
                        existingUser.oauthProvider = "google";
                        await existingUser.save();
                        return "/";
                    }
                    const newUser = await User.create({
                        username: googleProfile.email.split('@')[0],
                        email: googleProfile.email,
                        fullName: googleProfile.name,
                        oauthProvider: "google",
                        isVerified: true
                    })
                    if(!newUser){
                        return Response.json(
                            {
                                success: false,
                                message: "Error creating user"
                            },
                            {status: 500}
                        )
                    }
                    return "/";
                }
                else if(account?.provider == "github"){
                    const githubProfile = profile as GithubProfile;
                    console.log("githubprofile", githubProfile);
                    const existingUser = await User.findOne({email: githubProfile.email});
                    if(existingUser){
                        existingUser.oauthProvider = "github";
                        await existingUser.save();
                        return "/";
                    }
                    const newUser = await User.create({
                        username: githubProfile.email!.split('@')[0],
                        email: githubProfile.email,
                        fullName: githubProfile.name,
                        oauthProvider: "github",
                        isVerified: true
                    })
                    if(!newUser){
                        return Response.json(
                            {
                                success: false,
                                message: "Error creating user"
                            },
                            {status: 500}
                        )
                    }
                    return "/";
                }
            } catch (error) {
                console.log("Error in sign in callback", error);
                return Response.json(
                    {
                        success: false,
                        message: "Error in sign in callback"
                    },
                    {status: 500}
                )
            }
        },
        async jwt({token, user}){
            if(user){
                token._id = user._id?.toString();
                token.fullName = user.fullName;
                token.isVerified = user.isVerified;
                token.username = user.username;
                token.avatar = user.avatar;
            }
            return token;
        },
        async session({token, session}){
            if(token){
                session.user._id = token._id;
                session.user.fullName = token.fullName;
                session.user.isVerified = token.isVerified;
                session.user.username = token.username;
                session.user.avatar = token.avatar;
            }
            return session;
        }
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXT_AUTH_SECRET,
    pages:{
        signIn: '/sign-in',
    }
}

const handler = NextAuth(authOptions);
export {handler as GET , handler as POST};

