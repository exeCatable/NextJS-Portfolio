import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Büsra Sahin | Portfolio",
  description: "I'm a Frontend Developer with 2 Years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-slate-50 pt-28 text-gray-950 dark:bg-slate-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <div className="absolute right-[1rem] top-[-9rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#6f6fff] blur-[10rem] dark:bg-[#6f6fff] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-10rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#e39dff] blur-[10rem] dark:bg-[#e39dff] sm:w-[58.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
