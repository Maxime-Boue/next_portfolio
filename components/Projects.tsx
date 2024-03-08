import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";
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

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="group bg-gray-100 hover:bg-gray-200 transition max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8">
      <div className="flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt="Project i worked on"
        quality={95}
        className="
        absolute top-8 -right-40 w-[28.25rem] rounded-t-xl shadow-2xl group-even:right-[initial] 
        group-even:-left-40 group-hover:-translate-x-3 
        group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] transition group-even:group-hover:translate-x-3 
        group-even:group-hover:rotate-2"
      />
    </section>
  );
}
