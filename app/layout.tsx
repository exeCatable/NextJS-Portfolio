import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-indigo-50 pt-28 text-gray-950 sm:pt-36`}
      >
        <div
          className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] 
          rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] 
          rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[.28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
