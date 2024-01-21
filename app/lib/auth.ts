import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";


export const {auth, handlers:{GET, POST}} = NextAuth({
    providers : [
        google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        github({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        })
    ],
    secret: process.env.AUTH_SECRET as string,
})