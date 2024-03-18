"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full border 
      border-white rounded-none border-opacity-40 bg-white bg-opacity-80
      shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
      sm:top-6 sm:h-[3.25rem] sm:w-[34rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-semibold text-gray-500 sm:w-[intial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center p-3 hover:text-gray-900 transition dark:text-gray-300 dark:hover:text-gray-100",
                  {
                    "text-gray-950 dark:text-white":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gradient-to-r from-[#F2D1F3] to-[#f3ebd1] absolute rounded-full -z-10 inset-0  dark:from-[#886989] dark:to-[#897f5e]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
