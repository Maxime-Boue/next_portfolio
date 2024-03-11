"use client";

import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./Project";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section>
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
