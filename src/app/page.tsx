import localFont from "next/font/local";
import { SpotlightPreview } from "@/components/ui/SpotlightPreview";
import { motion } from "motion/react";
import HeroTitle from "./components/HeroTitle";
import HeroButtons from "./components/HeroButtons";

const fontRegular = localFont({
  src: "./fonts/Raleway/static/Raleway-regular.ttf",
});

export default function Home() {
  return (
    <div>
      <main className="bg-black/[0.96]">
        <SpotlightPreview>
          <HeroTitle />
          <HeroButtons />
        </SpotlightPreview>
        <div id="projects" className="w-screen h-[100vh]"></div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h1>Test</h1>
      </footer>
    </div>
  );
}
