import dbConnect from "@/db/dbConnect";
import { sendVerificationEmail } from "@/helper/sendVerificationEmail";
import User from "@/models/User.models";
import bcrypt from "bcryptjs";

export async function POST(request: Request){
    await dbConnect();
    try {
        const {fullName, username, email, password} = await request.json();
        const existingVerifiedUserByUsername = await User.findOne({
            username,
            isVerified: true
        });
        if(existingVerifiedUserByUsername){
            return Response.json(
                {
                    success: false,
                    message: "Username already exists"
                },
                {
                    status: 400
                }
            )
        }
        const existingUserByEmail = await User.findOne({email});
        let verifyCode = (Math.floor(Math.random() * 900000) + 100000).toString();

        if(existingUserByEmail){
            if(existingUserByEmail.isVerified){
                console.log("inside existing verified email user", existingUserByEmail);
                return Response.json(
                    {
                        success: false,
                        message: "User already exists with this email"
                    },
                    {status: 400}
                )
            }
            else{
                const hashedPassword = await bcrypt.hash(password, 10);
                existingUserByEmail.password = hashedPassword;
                existingUserByEmail.verifyCode = verifyCode;
                existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 600000);
                await existingUserByEmail.save();
            }
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                username,
                email,
                fullName,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: new Date(Date.now() + 600000)
            })
        }
        const emailResponse = await sendVerificationEmail(email, username, verifyCode);
        if(!emailResponse.success){
            return Response.json(
                {
                    success: false,
                    message: emailResponse.message
                },
                {status: 500}
            )
        }
        return Response.json(
            {
                success: true,
                message: "User registered successfully. Please verify your email."
            },
            {
                status: 201
            }
        )
    } catch (error) {
        console.error("Error registering user", error);
        return Response.json({
            success: false,
            message: "Error registering user"
        }, {status: 500})
    }
}