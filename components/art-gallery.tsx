"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { artData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Image from "next/image";

export default function ArtGallery() {
  const { ref } = useSectionInView("Art", 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center leading-8 sm:mb-40 sm:max-w-[70%]"
      id="art"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <SectionHeading>
        <span className="text-indigo-700 dark:text-indigo-500">My </span>Art
      </SectionHeading>
      <motion.div
        className="mt-4 flex flex-col  flex-wrap items-center justify-center gap-4 px-4 text-lg font-medium dark:text-white/80 sm:mt-auto sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {artData.map((images, index) => (
          <Image
            className="w-[25rem] rounded-md"
            src={images}
            alt="My art"
            quality={95}
            key={index}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
