import VerificationEmail from "../../email/VerificationEmail";
import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
) : Promise<any> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification email',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        console.log(verifyCode);
        return {
            success: true,
            message: "Verification email sent successfully"
        }
        
    } catch (error) {
        console.error("Error sending verification email: ",error);
        return {
            success: false,
            message: "Failed to send verification email."
        }
    }
}