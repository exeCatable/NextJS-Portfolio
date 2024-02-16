"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { artData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Image from "next/image";

export default function ArtGallery() {
  const { ref } = useSectionInView("Art");

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
        My Digital
        <span className="text-indigo-700 dark:text-indigo-500"> Art</span>
      </SectionHeading>
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {artData.map((images, index) => (
          <Image
            className="h-auto max-w-full rounded-lg transition hover:scale-[1.02]"
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
