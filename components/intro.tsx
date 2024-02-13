"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Me from "@/public/me.jpg";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Me}
              alt="Picture of me"
              width="300"
              height="300"
              quality="95"
              className="h-40 w-40 rounded-full border-[0.75rem] border-indigo-700 object-cover shadow-xl sm:h-60 sm:w-60"
              priority={true}
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 left-0 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-7 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-3xl font-extrabold sm:text-5xl">
          Hello, I&apos;m Büsra Sahin.
        </span>{" "}
        <br />
        I&apos;m a <span className="font-bold">
          Frontend Developer
        </span> with <span className="font-bold">2 years</span> of experience. I
        enjoy learning new things.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-indigo-700 px-7 py-3 
          text-white outline-none transition hover:scale-110 hover:bg-indigo-600 focus:scale-110 active:scale-105"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 
          py-3 text-gray-900 outline-none transition hover:scale-110 hover:bg-indigo-50 hover:text-gray-700 focus:scale-110 active:scale-105"
          href="/Lebenslauf_Büsra Sahin.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-white
          p-4 text-gray-900 outline-none transition hover:scale-110 hover:bg-indigo-50 hover:text-gray-700 focus:scale-110 active:scale-105"
          href="https://github.com/exeCatable"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
