"use client";

import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const About = () => {
  const { ref } = useSectionInView("Parcours");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionTitle>Mon Parcours</SectionTitle>
      <p className="mb-3">
        J&apos;ai obtenu le titre professionnel de{" "}
        <span className="font-semibold">Développeur Web et Web Mobile </span>
        suite à une formation intensive de 6 mois de l&apos;école O&apos;Clock,
        dans le cadre d&apos;une reconversion professionnelle. Ma formation
        m&apos;a permis d&apos;acquérir de solides connaissances en{" "}
        <span className="font-semibold">
          JavaScript/TypeScript, React, Node, Git, HTML/CSS
        </span>
        .... J&apos;ai également eu l&apos;occasion de développer mes
        compétences en gestion de projet, en tant que{" "}
        <span className="italic">Scrum Master</span>, dans le cadre d&apos;un
        projet de groupe d&apos;un mois, développant de A à Z une application de
        création d&apos;histoires interactives.
      </p>
      <p>
        Ma motivation est sans limite, alimentée par une soif constante d&apos;
        <span className="underline italic">apprendre</span> et de{" "}
        <span className="underline italic">progresser</span>.{" "}
        <span className="font-medium">Passionné</span> par le monde numérique,
        la technologie et la pop culture, ma formation scientifique et mon
        expérience en tant que technicien d&apos;études m&apos;aident énormément
        dans la compréhension et la logique si importantes dans le monde du
        développement web. Je suis donc prêt à{" "}
        <span className="underline">investir du temps</span> dans la maîtrise de
        nouveaux langages, outils et frameworks.
      </p>
    </motion.section>
  );
};

export default About;
