"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  link,
  behance,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[47rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-indigo-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8">
        <div className="flex h-full max-w-[100%] flex-col px-5 pb-7 pt-4 sm:max-w-[60%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="my-4 mt-2 flex flex-wrap gap-3">
            {github && (
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
                <a
                  className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 text-gray-700 transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/90"
                  href={github}
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
            )}
            {link && (
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
                <a
                  className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 text-gray-700 transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/90"
                  href={link}
                  target="_blank"
                >
                  <FaDesktop />
                </a>
              </div>
            )}
            {behance && (
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
                <a
                  className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 text-gray-700 transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/90"
                  href={behance}
                  target="_blank"
                >
                  <FaBehance />
                </a>
              </div>
            )}
          </div>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-indigo-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition
        group-even:-left-40 
        group-even:right-[initial]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3

        group-even:group-hover:rotate-2 sm:block"
        />
      </section>
    </motion.div>
  );
}
