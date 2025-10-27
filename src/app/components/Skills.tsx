"use client";

import { useEffect, useState } from "react";
import { img } from "motion/react-client";
import Image from "next/image";
import datas from "../../app/datas/skills.json";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useSpring,
} from "motion/react";

const Skills = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setIsMobile(window.innerWidth <= 1024);
    }

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const yUp = useTransform(scrollY, [0, 5000], [0, -1000]);
  // const xRight = useTransform(scrollY, [0, 500], [0, -900]);
  const smoothY = useSpring(yUp, { stiffness: 80, damping: 15 });

  const display = datas.skills.map((skill: any, index: number) => {
    return (
      <img src={skill} alt="image" className="skill-imag w-20 object-contain" />
    );
  });

  return (
    <div className="skills-container mx-auto w-[100vw] h-[160vh] md:h-[100vh] lg:h-[250vh] relative whitespace-nowrap overflow-hidden font-bold">
      <motion.h1
        initial={{ x: isMobile ? 20 : -200, opacity: 0 }}
        whileInView={{ x: isMobile ? 10 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{
          once: true,
          amount: 0.2,
          margin: isMobile ? "-200px 0px" : "-200px 0px",
        }}
        className="lg:text-[20rem] md:text=[14rem] text-[7rem] whitespace-nowrap ms-7"
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
          <motion.img
            initial={{ x: isMobile ? 50 : -100 }}
            whileInView={{ x: isMobile ? 0 : 0 }}
            transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760012748/react_mh0evw.png"
            alt="React"
            title="React"
            className="lg:w-32 w-20"
          />
          <motion.img
            initial={{ y: isMobile ? 50 : 40 }}
            whileInView={{ y: isMobile ? 0 : -50 }}
            transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/tailwind_ikgyu6.png"
            alt="tailwind"
            title="Tailwind Css"
            className="w-72 bottom-0 lg:-bottom-12 md:w-40 -left-8 rotate-3 absolute lg:-left-12"
          />
          <motion.img
            initial={{ x: isMobile ? 50 : 110 }}
            whileInView={{ x: isMobile ? 0 : 0 }}
            transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760005242/wordpress_qod9zg.png"
            alt="Wordpress"
            className="lg:w-32 w-20 right-0  absolute lg:top-0 lg:right-0 -rotate-12"
          />
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
          <motion.img
            initial={{ x: -120 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760709051/Express_JS_Icon_Gallery_for_Developers_and_Designers-removebg-preview_ghhbps.png"
            alt="express"
            className="w-32"
          />
          <motion.img
            initial={{ x: isMobile ? -50 : -120 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760709108/Node_Js_Developer_In_Official_Color_Sticker-removebg-preview_vih5ne.png"
            alt="Node"
            className="lg:w-32 w-16 absolute rotate-12"
          />
          <motion.img
            initial={{ x: isMobile ? 80 : 200 }}
            whileInView={{ x: isMobile ? 10 : 0 }}
            transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/laravel_rquhm7.png"
            alt="laravel"
            className="lg:w-72 md:w-56 w-32 absolute md:bottom-0 lg:-right-12 lg:top-12 -right-8 -rotate-x-12"
          />
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
            margin: " 500px 0px 500px 0px",
          }}
        >
          <h2 className="text-black mt-4 ms-4">Tools</h2>
          <motion.img
            initial={{ x: isMobile ? -10 : -170 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760508836/git_dkwoks.png"
            alt="Git"
            className="lg:w-56 w-32 absolute rotate-10 lg:-left-14 -left-8"
          />
          <motion.img
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760508801/postman_t3g1sx.png"
            alt="Postman"
            className="w-32 -bottom-12 absolute lg:-bottom-10 lg:left-44"
          />
          <motion.img
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760938605/Free_download_Visual_Studio_Code_logo-removebg-preview_xz24zv.png"
            alt="Postman"
            className="w-56 -right-18 absolute lg:-top-10 lg:-right-12 lg:-rotate-12 -rotate-45"
          />
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
          <motion.img
            initial={{ x: isMobile ? -10 : -150 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011730/mysql_axa9ze.png"
            alt="Mysql"
            className="w-40 absolute rotate-12 -left-8 lg:left-0"
          />
          <motion.img
            initial={{ y: isMobile ? 10 : 150 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dpghhbxwz/image/upload/v1760708798/MongoDB_Logo___01_-_PNG_Logo_Vector_Brand_Downloads__SVG__EPS_-removebg-preview_ljjovo.png"
            alt="Mongodb"
            title="mongodb"
            className="w-56 absolute -bottom-6 lg:-right-12 md:-right-14 -rotate-12"
          />
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
