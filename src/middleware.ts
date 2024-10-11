import { NextResponse, NextRequest } from 'next/server'
import NextAuth from 'next-auth';
import authConfig from './auth.config';

// export { auth as middleware } from "@/auth"

const {auth} = NextAuth(authConfig);

export default auth(async function middleware(request: NextRequest) {
    const token = await auth();
    const url = request.nextUrl;

    console.log(token, "token middleware");

    if (
        token &&
        (url.pathname.startsWith("/sign-in") ||
            url.pathname.startsWith("/sign-up") ||
            url.pathname.startsWith("/verify") )
    ) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (!token && url.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }
})

export const config = {
    matcher: ['/dashboard/:path*', '/sign-in', '/sign-up', '/', '/verify/:path*'],
}