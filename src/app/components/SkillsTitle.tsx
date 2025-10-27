"use client";
import { motion } from "motion/react";

const SkillsTitle = () => {
  return (
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="title text-2xl ps-8 pe-8 text-center"
    >
      My go-to tools for crafting seamless digital experiences.
    </motion.h1>
  );
};
export default SkillsTitle;
