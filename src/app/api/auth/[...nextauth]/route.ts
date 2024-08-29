import dbConnect from "@/db/dbConnect";
import User from "@/models/User.models";
import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";

const authOptions : NextAuthOptions = {
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
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
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
        })
    ],
    callbacks:{
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
        signIn: '/sign-in'
    }
}

const handler = NextAuth(authOptions);
export {handler as GET , handler as POST};

