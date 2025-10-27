"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react";

export default function AboutTitle() {
  const { scrollY } = useScroll();

  const xLeft = useTransform(scrollY, [0, 4000], [-2000, 200]);
  const xRight = useTransform(scrollY, [0, 4000], [500, -900]);

  return (
    <div className="title-wrapper">
      <motion.h1
        id="left"
        className="text-6xl whitespace-nowrap fontbo"
        style={{ x: xLeft }}
      >
        About Me - About Me - About Me - About Me - About Me - About Me - About
        Me - About Me
      </motion.h1>
      <motion.h1
        id="right"
        className="text-6xl whitespace-nowrap"
        style={{ x: xRight }}
      >
        About Me - About Me - About Me - About Me - About Me - About Me
      </motion.h1>
    </div>
  );
}
