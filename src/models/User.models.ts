import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document{
    username: string,
    email: string,
    password: string,
    fullName: string,
    avatar: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    oauthProvider: string
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
    },
    oauthProvider:{
        type: String,
        enum: ["google","github"],
        default: null
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
    },
    verifyCodeExpiry:{
        type: Date,
    },
    isVerified:{
        type: Boolean,
        default: false
    }

},{timestamps: true});

userSchema.pre("save", function(next){
    if(!this.password && !this.oauthProvider){
        next(new Error("Password is required for non-OAuth users."))
    }
    else{
        console.log(this.isVerified,"isverified");
        next();
    }
})

const User = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", userSchema));

export default User;