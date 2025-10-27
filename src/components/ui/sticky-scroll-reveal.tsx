"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "black/[0.96]", // slate-900
    "black/[0.96]", // black
    "black/[0.96]", // neutral-900
  ];
  const linearGradients = [
    "0 20px 25px -5px #FFFFFF", // cyan-500 to emerald-500
    "0 20px 25px -5px #ffa500", // pink-500 to indigo-500
    "0 20px 25px -5px #1F51FF", // pink-500 to indigo-500
    "0 20px 25px -5px #8B8EB6", // pink-500 to indigo-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  useEffect(() => {
    function checkWidth() {
      setIsMobile(window.innerWidth <= 1024);
    }

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  });

  if (!isMobile) {
    return (
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative flex lg:h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg mt-10 max-w-sm text-slate-300 h-[8rem]"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{
            boxShadow: backgroundGradient,
          }}
          className={cn(
            "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md  lg:block shadow-xl bg-transparent",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="relative h-[60ch] justify-center space-x-10 overflow-y-auto rounded-md p-10 overflow-x-hidden"
        ref={ref}
      >
        {content.map((data, index: number) => (
          <div
            key={index}
            className="data-wrapper w-full lg:h-screen md:h-[60rem] mt-19"
          >
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div>{data.content}</div>
          </div>
        ))}
      </motion.div>
    );
  }
};
