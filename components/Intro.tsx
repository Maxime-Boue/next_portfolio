"use client";

import portrait from "@/public/portrait.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.6,
            }}
          >
            <Image
              src={portrait}
              alt="Maxime Boué portrait"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="border-white border-[0.40rem] object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-small !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I&apos;m <span className="font-bold">Maxime Boué.</span> I&apos;m
        <span className="font-bold"> JavaScript Full-Stack Developer.</span> I
        enjoy<span className="font-bold"> practice and create</span>
        <span className="italic"> sites & apps</span> Mostly in{" "}
        <span className="underline">React and NodeJS</span>
      </motion.p>
    </section>
  );
};

export default Intro;
