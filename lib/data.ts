import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import IndieImg from "@/public/indie.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "CareerFoundry GmbH",
    position: "Full-Stack Web Development",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer at 24heGmbH.",
    icon: React.createElement(LuGraduationCap),
    date: " 02/2021 - 08/2021",
  },
  {
    title: "42he GmbH",
    position: "Front-End Developer",
    description:
      "Currently working front-end developer mainly working with Vue and Nuxt.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2021 - heute",
  },
  {
    title: "ganzgraph gmbh",
    position: "Webdesign",
    description:
      "During my apprenticeship i worked as a Web Designer for 2 Years",
    icon: React.createElement(CgWorkAlt),
    date: "10/2021 - heute",
  },
] as const;

export const projectsData = [
  {
    title: "IndieGala Website",
    description:
      "Indie Gala is a Website for a fictive Indie-Game Convention. All illustrations were done by me.",
    tags: ["HTML", "CSS", "Bootstrap"],
    imageUrl: IndieImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "Git",
  "Bootstrap",
  "Bulma",,
  "Figma",
] as const;