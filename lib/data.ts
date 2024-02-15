import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import IndieImg from "@/public/indie.png";
import Angular from "@/public/angular.png";
import Meet from "@/public/meet.png";
import PokeDex from "@/public/pokedex.png";
import thumbPhone from "@/public/thumbPhone.png";
import Next from "@/public/next.png";
import aniflix from "@/public/AnimeFlix.png";
import oldportfolio from "@/public/oldportfolio.png";

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
    name: "Art",
    hash: "#art",
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
    location: null,
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer at 24heGmbH.",
    icon: React.createElement(LuGraduationCap),
    date: "02/2021 - 08/2021",
  },
  {
    title: "42he GmbH",
    position: "Front-End Developer",
    location: null,
    description:
      "Currently working front-end developer mainly working with Vue and Nuxt.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2021 - heute",
  },
  {
    title: "ganzgraph gmbh",
    position: "Webdesign",
    location: null,
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
    link: "https://execatable.github.io/IndieGala/",
    behance: null,
  },
  {
    title: "My first Portfolio",
    description:
      "Within this project you will find everything that I used to build my first portfolio.",
    tags: ["HTML", "CSS", "Bootstrap", "Heroku", "App Hosting"],
    imageUrl: oldportfolio,
    github: "https://github.com/exeCatable/Portfolio",
    link: "https://execatable.github.io/Portfolio/",
    behance: null,
  },
  {
    title: "PokeDex",
    description:
      "Pokédex App built with HTML, CSS, JavaScript and an external API.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Pokedex API"],
    imageUrl: PokeDex,
    github: "https://github.com/exeCatable/Pokedex",
    link: "https://execatable.github.io/Pokedex/index.html",
    behance: null,
  },
  {
    title: "Backend for animeFlix",
    description:
      "This project is about creating a REST API for animeFlix-Client that interacts with a database that stores data about different movies.",
    tags: ["Node.js", "Express", "mongoDB", "Heroku", "App Hosting"],
    imageUrl: aniflix,
    github: null,
    link: "https://github.com/exeCatable/animeFlix",
    behance: null,
  },
  {
    title: "animeFlix - React Client",
    description: "This is the Client side to display data from my Backend.",
    tags: ["React", "Bootstrap", "Redux", "axios", "API integration"],
    imageUrl: aniflix,
    github: "https://github.com/exeCatable/animeFlix-React-Client",
    link: "https://anime-flix-reloaded.netlify.app/",
    behance: "https://www.behance.net/gallery/125718673/Case-Study-AnimeFlix",
  },
  {
    title: "animeFlix - Angular Client",
    description:
      "This project is a Angular application that allows users to view information about Anime movies, genres, and directors.",
    tags: ["Angular", "amgular material", "API integration"],
    imageUrl: Angular,
    github: "https://github.com/exeCatable/AnimeFlix-Angular-client",
    link: "https://execatable.github.io/AnimeFlix-Angular-client/welcome",
    behance: null,
  },
  {
    title: "Chat App",
    description:
      "Chat app designed for mobile devices built with React Native and Expo, chat interface styled with the gifted-chat library.",
    tags: ["React Native", "Gifted-Chat", "Firebase"],
    imageUrl: thumbPhone,
    github: "https://github.com/exeCatable/Chat-App",
    link: null,
    behance: null,
  },
  {
    title: "Meet App",
    description:
      "A serverless, progressive web application (PWA). Uses the Google Calender API to fetch data about upcoming events.",
    tags: [
      "Google OAuth2 authentication",
      "React",
      "AWS Lambda",
      "React axios",
      "Enzyme",
    ],
    imageUrl: Meet,
    github: "https://github.com/exeCatable/meet",
    link: "https://execatable.github.io/meet/",
    behance: null,
  },
  {
    title: "Next.js Portfolio",
    description: "New Portfolio Build with Next.js and hosted by Vercel.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    imageUrl: Next,
    github: "https://github.com/exeCatable/nextjs-portfolio",
    link: null,
    behance: null,
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
  "React",
  "Vue",
  "Adobe Creative Cloud",
] as const;

export const artData = [
  oldportfolio,
  Next,
  oldportfolio,
  Next,
  oldportfolio,
  Next,
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
