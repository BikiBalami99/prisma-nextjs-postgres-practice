"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => (
    <button onClick={() => signIn()}>Sign In</button>
);

export const LogOutButton = () => (
    <button onClick={() => signOut()}>Sign Out</button>
);
