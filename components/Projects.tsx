"use client";

import { projectsData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import React from "react";
import Project from "./Project";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionTitle>My Projects</SectionTitle>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
