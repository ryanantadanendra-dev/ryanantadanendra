import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpotlightPreview } from "@/components/ui/SpotlightPreview";
import { motion } from "motion/react";
import HeroTitle from "./components/HeroTitle";
import HeroButtons from "./components/HeroButtons";
import Skills from "./components/Skills";
import SkillsTitle from "./components/SkillsTitle";
import ProjectTitle from "./components/ProjectTitile";
import { About } from "./components/About";
import AboutTitle from "./components/AboutTitle";
import { FocusCardsDemo } from "@/components/ui/Cards";

export const metadata: Metadata = {
  title: "Ryananta Danendra",
  description: "Ryananta Danendra Portfolio Website",
};

export default function Home() {
  return (
    <div>
      <main className="bg-black/[0.96]">
        <div id="home">
          <SpotlightPreview>
            <HeroTitle />
            <HeroButtons />
          </SpotlightPreview>
        </div>
        <div id="projects" className="w-screen h-full">
          <ProjectTitle />
          <FocusCardsDemo />
        </div>
        <div id="about" className="w-screen h-full mt-72">
          <AboutTitle />
          <About />
        </div>
        <div id="skills" className="w-screen h-full mt-[30rem] lg:mt-72">
          <Skills />
        </div>
      </main>
    </div>
  );
}
