import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Nextjs-Prisma",
    description: "Practicing Nextjs and Prisma integration.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
