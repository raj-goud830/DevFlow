import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { ReactNode } from "react";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";


const inter = localFont({
  src: "./fonts/inter/interVF.ttf",
  variable: "--font-inter",
 });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon:'/images/site-logo.svg'
  }
};

const RootLayout = async ({ children }: { children: ReactNode; }) => {
  
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
      <body
        className={`${inter.variable } antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster/>
        </body>
        </SessionProvider>
    </html>
  );
}

export default RootLayout;