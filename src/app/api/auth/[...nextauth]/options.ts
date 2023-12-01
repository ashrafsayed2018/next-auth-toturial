import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import CredentialsProvider from "next-auth/providers/credentials";
export const options :NextAuthOptions = {
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name:"credentials",
            credentials:{
                username: {
                    label:"Username",
                    type:"text",
                    placeholder:"Enter your username",
                },
                password: {
                    label:"Password",
                    type:"password",
                    placeholder:"Enter your password",
                },
            },
            async authorize(credentials) {
                // this where you need to retrieve user data
                const user ={id:"42", name:"ashraf", password:"123456",image:"https://avatars.githubusercontent.com/u/33908261?v=4"}
                if(credentials?.username ==user.name && credentials?.password ==user.password) {
                    return user;
                } else {
                    return null;
                }
            },
        })
    ]
}