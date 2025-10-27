"use client";

import { motion } from "motion/react";

export default function HeroButtons() {
  return (
    <div className="buttons-wrapper flex justify-center gap-3 mt-8">
      <a href="#projects">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          className="bg-[#1F51FF] px-6 py-3 rounded-full cursor-pointer hover:scale-95 transition-all ease-out duration-300"
        >
          Projects
        </motion.button>
      </a>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwfGwsHbvCbPjsJllxNPDFgbbzlrmNflXZVngqBnpbVNJkldbRmWQXWjWNgxcDpdHsNrXq">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          className="px-6 py-3 rounded-full border-[2px] border-[#1F51FF] text-white shadow-[0_0_30px_#39FF14] hover:shadow-none hover:scale-90 transition-all duration-300 ease-out cursor-pointer"
        >
          Email Me!
        </motion.button>
      </a>
    </div>
  );
}
