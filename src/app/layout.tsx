import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AbuBakar Portfolio",
    description:"Skilled Web Developer with expertise in HTML, CSS, Tailwind, JavaScript (ES6+), and the MERN stack (MongoDB, Express.js, React.js, Node.js). Passionate about",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light" className="m-0">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
