import Header from "@/components/header"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Büsra Sahin | Portfolio",
  description: "I'm a Frontend Developer with 2 Years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-indigo-50 text-gray-950 relative`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
         <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] 
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[.28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
