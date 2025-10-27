"use client";
import { motion } from "motion/react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function HeroTitle() {
  return (
    <>
      <div>
        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <LayoutTextFlip
            text="Hola, I'm "
            words={["Ryananta Danendra", "A Full-stack Developer", "A Student"]}
          />
        </motion.div>
      </div>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        className="hero-heading2 text-center lg:text-xl lg:mt-2"
      >
        Turning Ideas into Functional, Full-Stack Solutions
      </motion.h2>
    </>
  );
}
