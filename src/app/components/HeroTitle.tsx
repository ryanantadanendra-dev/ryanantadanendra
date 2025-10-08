"use client";
import { motion } from "motion/react";

export default function HeroTitle() {
  return (
    <>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`text-center lg:text-6xl`}
      >
        Ryananta Danendra
      </motion.h1>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="hero-heading2 text-center lg:text-xl lg:mt-2"
      >
        Turning Ideas into Functional, Full-Stack Solutions
      </motion.h2>
    </>
  );
}
