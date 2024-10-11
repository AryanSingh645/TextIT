import { AuthError, CredentialsSignin, NextAuthConfig } from "next-auth";
import dbConnect from "@/db/dbConnect";
import User from "@/models/User.models";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

class wrongCredsError extends CredentialsSignin{
    code = "Wrong Credentials";
}

class userNotFoundError extends CredentialsSignin{
    code = "User not found";
}

class userNotVerifiedError extends CredentialsSignin{
    code = "User not verified. Please verify by signing up again."
}
export default {providers: [
    Credentials({
        name: "Credentials",
        id: "credentials",
        credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
        },
        authorize: async(credentials: any) => {
            await dbConnect();
            try {
                console.log("Received Credentials:", credentials);
                const user = await User.findOne({
                    $or: [
                        { email: credentials.identifier },
                        { username: credentials.identifier },
                    ],
                });
                if (!user) {
                    throw new Error("user not found");

                }
                if (!user.isVerified) {
                    throw new userNotVerifiedError();
                }
                console.log("user if passwordCorrect outside", user);
                const isPasswordCorrect = await bcrypt.compare(
                    credentials.password,
                    user.password || ""
                );
               if(!isPasswordCorrect){
                throw new wrongCredsError();
               }
               console.log("password correct" , user);
               return user;
            } catch (error) {
                console.log(error, "error in nextauth");
                return null;
            }
        },
    }),
    Google,
    GitHub ]} satisfies NextAuthConfig