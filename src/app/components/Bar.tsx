"use client";

import { useState, useEffect } from "react";
import { NavbarDemo } from "@/components/ui/Navbar";
import Hamburger from "./hamburger";

export default function Bar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setIsMobile(window.innerWidth <= 1024);
    }

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  });

  if (!isMobile) {
    return <NavbarDemo />;
  } else {
    return <Hamburger />;
  }
}
