// import { connectDB } from "@/dbConfig/dbConfig";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcrypt";
// import { NextAuthOptions } from "next-auth";
// import { JWT } from "next-auth/jwt";
// import { JWTPayload, SignJWT, importJWK } from "jose";
// import { Session } from "next-auth";
// import User from "../models/User";
// import { sendEmail } from "@/helpers/mailer";
// import axios from "axios";

// interface Token extends JWT {
//   uid: string;
//   jwtToken: string;
// }

// export interface SessionExtended extends Session {
//   user: {
//     id: string;
//     jwtToken: string;
//     email: string;
//     name: string;
//   };
// }

// interface UserType {
//   id: string;
//   name: string;
//   email: string;
//   token: string;
// }

// const generateJWT = async (payload: JWTPayload) => {
//   const secret = process.env.JWT_SECRET || "secret";
//   const jwk = await importJWK({ k: secret, alg: "HS256", kty: "oct" });
//   const jwt = await new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("1d")
//     .sign(jwk);

//   return jwt;
// };

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize (credentials: any) {
//         if (!credentials.username || !credentials.password) {
//           return null;
//         }

//         await connectDB();
//         const user = await axios.get(`http://localhost:3001/auth/userdetails`, {
//           data: {
//             email: credentials.username,
//           },
//         });

//         const userDb = user.data;

//         // const userDb = await User.findOne({
//         //   email: credentials.username,
//         // });

//         console.log("email verified", userDb.isEmailVerified);
//         if (userDb) {
//           if (!userDb.isEmailVerified) {
//             // Generate a new verification token with bcrypt
//             const verifyToken = await bcrypt.hash(userDb.email, 10);
//             const verifyTokenExpiry = Date.now() + 3600000; // 1 hour expiry

//             // Update user with new token and expiry
//             userDb.verifyToken = verifyToken;
//             userDb.verifyTokenExpiry = verifyTokenExpiry;
//             await userDb.save();

//             // Send verification email
//             await sendEmail({
//               email: userDb.email,
//               emailType: "VERIFY",
//               userId: userDb._id,
//             });

//             throw new Error("Email is not verified. A new verification email has been sent.");
//           }

//           // Validate password
//           if (await bcrypt.compare(credentials.password, userDb.password)) {
//             const jwt = await generateJWT({ id: userDb.id });
//             return {
//               id: userDb.id,
//               name: userDb.name,
//               email: userDb.email,
//               token: jwt,
//             };
//           }
//         }

//         try {
//           // sign up
//           if (credentials.username.length < 3 || credentials.password.length < 3) {
//             return null;
//           }

//           const hashedPassword = await bcrypt.hash(credentials.password, 10);

//           // Generate a new verification token with bcrypt
//           const verifyToken = await bcrypt.hash(credentials.username, 10);
//           const verifyTokenExpiry = Date.now() + 3600000; // 1 hour expiry

//           // Create new user
//           const user = new User({
//             email: credentials.username,
//             name: credentials.username,
//             password: hashedPassword,
//             verifyToken,
//             verifyTokenExpiry,
//           });

//           await user.save();

//           const userDb = await User.findOne({
//             email: credentials.username,
//           });

//           console.log("user in db: ", userDb);

//           if (userDb) {
//             const successResponse = {
//               status: "success",
//               message: "User registered successfully!",
//             };

