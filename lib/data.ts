import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import IndieImg from "@/public/indie.png";
import PokeDex from "@/public/pokedex.png";

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
    date: "02/2021 - 08/2021",
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
    date: " 10/2021 - heute ",
  },
] as const;

export const projectsData = [
  {
    title: "IndieGala Website",
    description:
      "Indie Gala is a Website for a fictive Indie-Game Convention. All illustrations were done by me.",
    tags: ["HTML", "CSS", "Bootstrap"],
    imageUrl: IndieImg,
    github: "https://github.com/exeCatable/IndieGala",
    link: "https://github.com/exeCatable/IndieGala",
  },
  {
    title: "PokeDex",
    description:
      "Pokédex App built with HTML, CSS, JavaScript and an external API.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Pokedex API"],
    imageUrl: PokeDex,
    github: "https://github.com/exeCatable/Pokedex",
    link: "https://github.com/exeCatable/IndieGala",
  },
  {
    title: "PokeDex",
    description:
      "Pokédex App built with HTML, CSS, JavaScript and an external API.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Pokedex API"],
    imageUrl: PokeDex,
    // TODO: implement conditional rendering
    github: null,
    link: "https://github.com/exeCatable/IndieGala",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "Git",
  "Bootstrap",
  "Bulma",
  "Figma",
] as const;

export const aboutMe = [
  {
    description: `
    Hey there! I'm Büsra, a web developer and designer from Germany.
    Started off as a web designer, but then I made the leap to become a
    Frontend Developer. of work, you'll catch me sketching—whether
    it's with a pencil or on a digital canvas. I'm also big on
    Dungeons and Dragons sessions with my pals, and I like to tinker with my
    own coding projects in my free time.`,
  },
] as const;
