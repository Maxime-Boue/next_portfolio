import atelierCraie from "@/public/atelierCraie.png";
import blackhole from "@/public/blackhole.jpg";
import dreamkrafters from "@/public/dreamkrafters.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Parcours",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "DreamKrafters",
    description:
      "Application de création d'histoires interactives, à la manière d'un livre dont vous êtes le héros.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind", "Shadcn"],
    imageUrl: dreamkrafters,
  },
  {
    title: "Atelier Craie",
    description: "Reconstruction d'un site web, à suivre...",
    tags: ["Wordpress", "CSS", "FIGMA"],
    imageUrl: atelierCraie,
  },
  {
    title: "BlackHole",
    description: "Projet en cours...",
    tags: ["XXX", "XXX", "XXX", "XXX", "XXX"],
    imageUrl: blackhole,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "Tailwind CSS",
  "Vite",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
