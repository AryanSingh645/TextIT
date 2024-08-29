import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document{
    username: string,
    email: string,
    password: string,
    fullName: string,
    avatar: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean
}

const userSchema : Schema<User> = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required"],
        trim: true,
        index: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match:[/.+\@.+\..+/, 'Please use a valid email address'],
        index: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    fullName:{
        type: String,
        required: [true, "Fullname is required"],
        trim: true
    },
    avatar:{
        type: String,
    },
    verifyCode:{
        type: String,
        required: true
    },
    verifyCodeExpiry:{
        type: Date,
        required: true,
    },
    isVerified:{
        type: Boolean,
        default: false
    }

},{timestamps: true});

const User = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", userSchema));

export default User;