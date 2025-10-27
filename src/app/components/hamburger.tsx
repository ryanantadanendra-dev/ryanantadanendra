"use client";

export default function Hamburger() {
  function openMenu() {
    const hamburger = document.getElementById("hamburger-btn");
    const Menu = document.getElementById("hamburger-menu");
    const Path = document.getElementById("hamburger-path");

    if (Menu?.classList.contains("-top-96")) {
      Menu.classList.remove("-top-96");
      Menu.classList.add("top-0");
      Path?.removeAttribute("path");
      Path?.setAttribute("fill", "#333333");
    } else if (Menu?.classList.contains("top-0")) {
      Menu?.classList.remove("top-0");
      Menu?.classList.add("-top-96");
      Path?.removeAttribute("path");
      Path?.setAttribute("fill", "#FFFFFF");
    }
  }

  return (
    <nav className="relative top-0 h-0 z-50">
      <button id="hamburger-btn" className=" cursor-pointer" onClick={openMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-12 fixed lg:top-5 lg:left-5"
        >
          <path
            id="hamburger-path"
            fill="#FFFFFF"
            d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
          />
        </svg>
      </button>
      <div
        className=" -z-10 w-full h-72 -top-96 transition-all duration-300 ease-out fixed pt-20 ps-3"
        id="hamburger-menu"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <a href="#home">
          <p className="text-black text-2xl">Home</p>
        </a>
        <a href="#projects">
          <p className="text-black text-2xl mt-1">Projects</p>
        </a>
        <a href="#about">
          <p className="text-black text-2xl mt-1">About</p>
        </a>
        <a href="#skills">
          <p className="text-black text-2xl mt-1">Skills</p>
        </a>
      </div>
    </nav>
  );
}
