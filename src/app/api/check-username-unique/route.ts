import dbConnect from "@/db/dbConnect";
import User from "@/models/User.models";
import { usernameValidation } from "@/schemas/usernameSchema";
import {z} from "zod";

const UsernameQuerySchema = z.object({
    username: usernameValidation
})

export async function GET(request : Request){
    await dbConnect();
    try {
        const { searchParams } = new URL(request.url);
        const queryParams = {username : searchParams.get('username')}
        const result = UsernameQuerySchema.safeParse(queryParams);

        if(!result.success){
            const usernameErrors = result.error.format().username?._errors || [];
            return Response.json(
                {
                    success: false,
                    message: usernameErrors?.length > 0 ? usernameErrors.join(', ') : 'Invalid username'
                },
                {
                    status: 400
                }
            )
        }

        const {username} = result.data;

        const existingVerifiedUser = await User.findOne({
            username,
            isVerified: true
        })
        if(existingVerifiedUser){
            return Response.json(
                {
                    success: false,
                    message: "Username already taken"
                },
                {
                    status: 400
                }
            )
        }
        return Response.json(
            {
                success: true,
                message: "Username is unique"
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.log("Error in checking usernames", error);
        return Response.json(
            {
                success: false,
                message: "Error in checking usernames"
            },
            {
                status: 500
            }
        )
    }
}