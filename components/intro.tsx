"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Me from "@/public/me.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative flex flex-row">
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
            className="absolute bottom-0 right-0 text-5xl sm:text-7xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🐈
          </motion.span>
        </div>
      </div>

      <motion.div>
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-3xl font-extrabold sm:text-5xl">
            Hello, I&apos;m{" "}
            <span className="text-indigo-700 dark:text-indigo-500">
              Büsra Sahin
            </span>
            .
          </span>{" "}
          <br />
          I&apos;m a <span className="font-bold">
            Frontend Developer
          </span> with <span className="font-bold">2 years</span> of experience.
          I enjoy learning new things.
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
            text-white outline-none transition hover:scale-105 hover:bg-indigo-600 focus:scale-110 active:scale-105"
          >
            Contact me{" "}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>
          <a
            className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-105 focus:scale-110 active:scale-105 dark:bg-white/10"
            href="/Lebenslauf_Büsra Sahin.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
          </a>
          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/exeCatable"
            target="_blank"
          >
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
