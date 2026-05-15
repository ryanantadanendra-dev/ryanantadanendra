"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "motion/react";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setIsMobile(window.innerWidth < 1024 && window.innerWidth < 450);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth >= 450);
    }

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className="skills-container mx-auto w-[100vw] h-[160vh] md:h-[100vh] lg:h-full relative whitespace-nowrap overflow-hidden font-bold">
      <motion.h1
        initial={{ x: isMobile ? 20 : -200, opacity: 0 }}
        whileInView={{ x: isMobile ? 0 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{
          once: true,
          amount: 0.2,
          margin: isMobile ? "-200px 0px" : "-200px 0px",
        }}
        className="lg:text-[20rem] md:text=[14rem] text-[7rem] whitespace-nowrap lg:ms-7 ms-2"
      >
        Tech
      </motion.h1>
      <div className="bento-wrapper flex justify-center gap-4">
        <motion.div
          className="bg-white w-64 h-64 rounded-xl overflow-hidden relative"
          // style={{ y: smoothY }}
          initial={{ y: 500, scale: 0, rotate: 360 }}
          whileInView={{ y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0, margin: "500px 0px 500px 0px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-black mt-4 ms-4">Front-end</h2>
          <div className="skill-image lg:w-32 w-20">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760012748/react_mh0evw.png"
              alt="React"
              title="React"
              className="object-cover"
              width={100}
              height={100}
            />
          </div>
          <div className="skill-image bottom-0 md:-bottom-12 lg:-bottom-2 md:w-40 -left-8 rotate-3 absolute lg:-left-12">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/tailwind_ikgyu6.png"
              alt="tailwind"
              title="Tailwind Css"
              className="object-cover"
              width={isMobile ? 100 : isTablet ? 180 : 200}
              height={isMobile ? 100 : isTablet ? 180 : 200}
            />
          </div>
          <div className="skill-image lg:w-32 w-20 right-0  absolute lg:top-0 lg:right-0 -rotate-12">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760005242/wordpress_qod9zg.png"
              alt="Wordpress"
              className="object-cover"
              width={isMobile ? 100 : isTablet ? 160 : 200}
              height={isMobile ? 100 : isTablet ? 160 : 200}
            />
          </div>
        </motion.div>
        <motion.div
          className="bg-white w-96 h-64 rounded-xl overflow-hidden relative"
          // style={{ y: smoothY }}
          initial={{ y: 500, scale: 0, rotate: 180 }}
          whileInView={{ y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2, margin: "500px 0px 500px 0px" }}
        >
          <h2 className="text-black mt-4 ms-4">Back-end</h2>
          <div className="skill-image">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760709051/Express_JS_Icon_Gallery_for_Developers_and_Designers-removebg-preview_ghhbps.png"
              alt="express"
              width={isMobile ? 100 : isTablet ? 140 : 140}
              height={isMobile ? 100 : isTablet ? 140 : 140}
            />
          </div>
          <div className="skill-image absolute rotate-12">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760709108/Node_Js_Developer_In_Official_Color_Sticker-removebg-preview_vih5ne.png"
              alt="Node"
              width={isMobile ? 100 : isTablet ? 90 : 110}
              height={isMobile ? 100 : isTablet ? 90 : 110}
            />
          </div>
          <div className="skill-image absolute md:bottom-0 lg:-right-12 lg:top-12 -right-8 -rotate-x-12">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/laravel_rquhm7.png"
              alt="laravel"
              width={isMobile ? 140 : isTablet ? 180 : 250}
              height={isMobile ? 140 : isTablet ? 180 : 250}
            />
          </div>
        </motion.div>
      </div>
      <div className="bento-wrapper flex justify-center gap-4 mt-4">
        <motion.div
          className="bg-white w-96 h-64 rounded-xl relative overflow-hidden"
          // style={{ y: smoothY }}
          initial={{ y: 200, scale: 0, rotate: 180 }}
          whileInView={{ y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{
            once: true,
            amount: 0.2,
            margin: "500px 0px 500px 0px",
          }}
        >
          <h2 className="text-black mt-4 ms-4">Tools</h2>
          <div className="skill-image absolute rotate-10 lg:-left-14 -left-8">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760508836/git_dkwoks.png"
              alt="Git"
              width={isMobile ? 120 : isTablet ? 120 : 180}
              height={isMobile ? 120 : isTablet ? 120 : 180}
            />
          </div>
          <div className="skill-image -bottom-12 absolute lg:-bottom-10 lg:left-44">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760508801/postman_t3g1sx.png"
              alt="Postman"
              width={isMobile ? 120 : isTablet ? 140 : 160}
              height={isMobile ? 120 : isTablet ? 140 : 160}
            />
          </div>
          <div className="skill-image -right-18 absolute lg:-top-10 lg:-right-12 lg:-rotate-12 -rotate-45">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760938605/Free_download_Visual_Studio_Code_logo-removebg-preview_xz24zv.png"
              alt="vscode"
              width={isMobile ? 180 : isTablet ? 240 : 180}
              height={isMobile ? 180 : isTablet ? 240 : 180}
            />
          </div>
        </motion.div>
        <motion.div
          className="bg-white w-64 h-64 rounded-xl relative overflow-hidden"
          // style={{ y: smoothY }}
          initial={{ y: 200, scale: 0, rotate: 360 }}
          whileInView={{ y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0, margin: "500px 0px 500px 0px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-black mt-4 ms-4">Database</h2>
          <div className="skill-image absolute rotate-12 -left-8 lg:left-0">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011730/mysql_axa9ze.png"
              alt="Mysql"
              width={isMobile ? 140 : isTablet ? 170 : 150}
              height={isMobile ? 140 : isTablet ? 170 : 150}
            />
          </div>
          <div className="skill-image absolute -bottom-6 lg:-right-12 md:-right-14 -rotate-12">
            <Image
              src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760708798/MongoDB_Logo___01_-_PNG_Logo_Vector_Brand_Downloads__SVG__EPS_-removebg-preview_ljjovo.png"
              alt="Mongodb"
              title="mongodb"
              width={isMobile ? 140 : isTablet ? 190 : 200}
              height={isMobile ? 140 : isTablet ? 190 : 200}
            />
          </div>
        </motion.div>
      </div>
      <motion.h1
        initial={{ x: isMobile ? 20 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{
          once: true,
          amount: 0,
          margin: isMobile ? "-200px 0px" : "-200px 0px",
        }}
        className="lg:text-[20rem] md:text=[14rem] text-[7rem] text-end whitespace-nowrap text-green-800 me-7"
      >
        Stack
      </motion.h1>
    </div>
  );
};
export default Skills;
