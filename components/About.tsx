"use client";

import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionTitle>About me</SectionTitle>
      <p className="mb-3">
        I obtained a professional title following 6 months of intensive training
        as a Fullstack JavaScript web developer at O&apos;Clock, as part of a
        professional retraining program. My training enabled me to acquire solid
        knowledge in{" "}
        <span className="font-semibold">
          JavaScript/TypeScript, React, Node, Git, HTML/CSS
        </span>
        ... I also had the opportunity to develop my project management skills,
        as a <span className="font-semibold">Scrum Master</span>, within a
        1-month group project, developing from A to Z an{" "}
        <span className="italic">
          application for creating interactive stories
        </span>
        .
      </p>
      <p>
        My motivation is boundless, fueled by a constant thirst to learn and
        progress. Passionate about the digital world, technology and pop
        culture, my scientific background and experience as a design technician
        help me enormously in the understanding and logic so important in the
        world of web development. So I&apos;m ready to invest time and effort in
        mastering new languages, tools and frameworks.
      </p>
    </motion.section>
  );
};

export default About;
