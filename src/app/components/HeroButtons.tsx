"use client";

import { motion } from "motion/react";

export default function HeroButtons() {
  return (
    <div className="buttons-wrapper flex justify-center gap-3 mt-8">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#1F51FF] px-6 py-3 rounded-full cursor-pointer hover:scale-95 transition-all ease-out duration-300"
      >
        Projects
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="px-6 py-3 rounded-full border-[2px] border-[#1F51FF] text-white shadow-[0_0_30px_#39FF14] hover:shadow-none hover:scale-90 transition-all duration-300 ease-out"
      >
        Email Me!
      </motion.button>
    </div>
  );
}
