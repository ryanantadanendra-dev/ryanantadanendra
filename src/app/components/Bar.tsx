"use client";

import { NavbarDemo } from "@/components/ui/Navbar";
import Hamburger from "./hamburger";

export default function Bar() {
  if (window.innerWidth > 450) {
    return <NavbarDemo />;
  } else {
    return <Hamburger />;
  }
}
