"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey there! I&apos;m Büsra, a web developer and designer from Germany.
        Started off as a web designer, but then I made the leap to become a
        Frontend Developer. of work, you&apos;ll catch me sketching—whether
        it&apos;s with a pencil or on a digital canvas. I&apos;m also big on
        Dungeons and Dragons sessions with my pals, and I like to tinker with my
        own coding projects in my free time.
      </p>
    </motion.section>
  );
}
