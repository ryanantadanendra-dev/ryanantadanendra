"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg object-cover relative bg-gray-100 dark:bg-neutral-900 overflow-hidden md:h-96 md:w-full w-72 h-72 transition-all duration-300 ease-out mt-12 mx-auto",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/70 flex flex-col py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
        <p className="project-desc text-xs lg:text-l">{card.description}</p>
        <div className="stacks-wrapper flex mt-auto items-center gap-3">
          <p>Built With: </p>
          {card?.stacks?.map((stack: string, index: number) => (
            <div className="project-stack" key={index}>
              <img src={stack} alt={card.title} className="w-12 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  stacks: string[];
  description: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:px-0 px-3 md:grid-cols-2 gap-10 max-w-5xl mx-auto md:px-8 w-full lg:cursor-default cursor-pointer">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
