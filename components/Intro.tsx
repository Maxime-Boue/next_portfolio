"use client";

import useSectionInView from "@/lib/hooks";
import portrait from "@/public/astro.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const Intro = () => {
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text- sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              src={portrait}
              alt="Maxime Boué portrait"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="border-white border-[0.40rem] object-cover shadow-xl rounded-full"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-small !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I&apos;m <span className="font-bold">Maxime Boué.</span> I&apos;m
        <span className="font-bold"> JavaScript Full-Stack Developer.</span> I
        enjoy<span className="font-bold"> practice and create</span>
        <span className="italic"> sites & apps.</span> Mostly in{" "}
        <span className="underline">React and NodeJS</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 shadow-lg outline-none focus:scale-110 hover:scale-105  active:scale-105 transition"
        >
          Contact me here{" "}
          <IoIosArrowForward className="opacity-70 groupe-hover:translate-x-2 transition" />
        </Link>
        <a
          className="group bg-white text-gray-700 border border-black/10 px-7 py-3 flex items-center gap-2 shadow-lg rounded-full outline-none focus:scale-110 hover:scale-100 active:scale-105 transition"
          href="/cv_maxime-boue.pdf"
          download
        >
          Download my CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/maxime-boue-dev"
          target="_blank"
          className="bg-white text-gray-700 border border-black/10 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950  active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Maxime-Boue?tab=repositories"
          target="_blank"
          className="bg-white text-gray-700 border border-black/10 p-4 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950  active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
