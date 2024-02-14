"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="my-7 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="text-indigo-400 underline"
          href="mailto:buesra.sahin97@web.de"
        >
          buesra.sahin97@web.de
        </a>
      </p>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row dark:text-white/80"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      ></motion.div>
    </section>
  );
}
