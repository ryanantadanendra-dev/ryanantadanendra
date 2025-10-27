"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Me from "../../../public/images/me.png";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";

const words = `Hey There! im A. A. Ngurah Bagus Ryananta Danendra, you can call me Danend. I was born on the 13th of April 2006 and im from Denpasar, Bali.Im a full - stack web developer and im currently a studen at ITB STIKOM Bali`;

const content = [
  {
    title: "Ryananta Danendra",
    description:
      "Hey There! My Name Is A. A. Ngurah Bagus Ryananta Danendra, but people usually called me Danend and I was born on the 13th of April 2006",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="flex h-full w-full md:w-screen lg:w-full items-center justify-center text-white"
      >
        <img
          src="../../../images/me.png"
          width={300}
          height={300}
          className="h-full w-full lg:w-full lg:h-full md:w-[30rem] md:h-[30rem] object-contain"
          alt="linear board demo"
        />
      </motion.div>
    ),
  },
  {
    title: "Where I am From",
    description:
      "I was born and lived on a little island in Indonesia called Bali. Bali was said to be the island of god, because it has so much Hindu temples in it. With its natures and cultures, Bali could attract many tourists from around the world.",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="flex h-full w-full items-center justify-center text-white"
      >
        <img
          src="../../../images/bali.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </motion.div>
    ),
  },
  {
    title: "Student",
    description:
      "Currently i am a student at ITB STIKOM Bali, a digital and technology institution in Bali. I am taking the Information System Major which is the best match for my web development career. ",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="flex h-full w-full items-center justify-center text-white"
      >
        <img
          src="../../../images/stikom.png"
          width={300}
          height={300}
          className="h-52 w-52 md:w-72 md:h-72 lg:w-52 lg:h-52 object-contain"
          alt="linear board demo"
        />
      </motion.div>
    ),
  },
  {
    title: "Full-stack Web Developer",
    description:
      "At the moment, i am focusing on my full-stack development journey by meeting lots of new people, learning at the campus, and building various types of projects.",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="flex h-full w-full items-center justify-center text-white"
      >
        <img
          src="../../../images/programmer.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </motion.div>
    ),
  },
];
export function About() {
  return (
    <div className="w-full py-4 mt-28">
      <StickyScroll content={content} />
    </div>
  );
}
