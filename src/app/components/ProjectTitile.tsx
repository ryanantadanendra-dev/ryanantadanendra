"use client";
import { motion } from "motion/react";

const ProjectTitle = () => {
  return (
    <>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="title lg:text-5xl text-4xl ps-8 pe-8"
      >
        Turning ideas into interactive digital experiences —{" "}
      </motion.h1>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="title lg:text-5xl text-4xl ps-8 pe-8"
      >
        here are some of my favorite builds.
      </motion.h1>
    </>
  );
};

export default ProjectTitle;
