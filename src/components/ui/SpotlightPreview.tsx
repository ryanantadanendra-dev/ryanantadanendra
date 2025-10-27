import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";

export function SpotlightPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[100vh] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center -z-0">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="lg:-top-40 top-20 left-0 md:-top-20 "
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl my-auto lg:my-0 p-4 pt-20 md:pt-0">
        {children}
      </div>
    </div>
  );
}
