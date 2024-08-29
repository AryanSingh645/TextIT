import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request : NextRequest){
    const token = await getToken({req: request});
    const url = request.nextUrl;

    if(token && 
        url.pathname.startsWith("/sign-in") ||
        url.pathname.startsWith("/sign-up")
    ){
        return NextResponse.redirect(new URL("/chat", request.url));
    }
}

// export const config = {
//     matcher: ['/chat/:path*','sign-in','sign-up','/']
//   }