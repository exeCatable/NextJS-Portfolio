"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
// import { FaRegClipboard } from "react-icons/fa";
import SectionHeading from "./section-heading";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section ref={ref} className="mb-28 scroll-mt-28 sm:mb-40" id="contact">
      <SectionHeading>
        <span className="text-indigo-700 dark:text-indigo-500">Contact </span>Me
      </SectionHeading>
      <div className="flex flex-col items-baseline">
        {/* <div>
          <p className="my-7 text-gray-700 dark:text-white/80">
            Feel free to contact me at {" "}
          </p>
        </div> */}
        <div className="flex items-center gap-3">
          <div>
            <a
              className="group flex items-center gap-2 rounded-full bg-indigo-700 px-7 py-3
                text-white outline-none transition hover:scale-110 hover:bg-indigo-600 focus:scale-110 active:scale-105"
              href="mailto:buesra.sahin97@web.de"
            >
              buesra.sahin97@web.de
            </a>
          </div>
          <div>
            {/* TODO: implement copytoclipboard */}
            {/* <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
              href="https://github.com/exeCatable"
              target="_blank"
            >
              <FaRegClipboard />
            </a> */}
          </div>
        </div>
      </div>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium dark:text-white/80 sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      ></motion.div>
    </section>
  );
}
