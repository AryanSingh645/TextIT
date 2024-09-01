import {z} from "zod";
import { usernameValidation } from "./usernameSchema";


export const signupSchema = z.object({
    fullName: z.string().min(1, "Fullname is required"),
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'})
})