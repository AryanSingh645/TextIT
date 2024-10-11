import dbConnect from "@/db/dbConnect";
import User from "@/models/User.models";

export async function POST(request : Request){
    await dbConnect();
    try {
        const {username, email} = await request.json();
        const user = await User.findOne({
            $or : [{ username }, { email }]
        })
        if(!user){
            return Response.json(
                {
                    success: false,
                    message: "User does not exist"
                },
                {
                    status: 404,
                }
            )
        }
        return Response.json(
            {
                success: true,
                data: user._id,
                message: "User Found Successfully"
            },
            {
                status: 200,
            }
        )
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Error while fetching user"
            },
            {
                status: 500,
            }
        )
    }
}