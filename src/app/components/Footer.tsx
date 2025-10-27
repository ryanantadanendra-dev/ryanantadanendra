"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setIsMobile(window.innerWidth <= 1024);
    }

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  });

  return (
    <footer className="w-screen h-[46rem] lg:h-[30rem] bg-gray-50 rounded-4xl text-black overflow-hidden">
      <div className="content h-3/5 flex flex-col lg:flex-row gap-10 ps-12 lg:pt-8">
        <div className="navigation-wrapper mt-5 lg:mt-0">
          <h3 className="text-3xl font-bold">Navigation</h3>
          <a href="#home" className="footer-link block">
            Home
          </a>
          <a href="#projects" className="footer-link  block">
            Projects
          </a>
          <a href="#about" className="footer-link block">
            About
          </a>
          <a href="#skills" className="footer-link">
            Skills
          </a>
        </div>
        <div className="social-container w-72 font-bold">
          <h3 className="text-3xl">Socials</h3>
          <a href="https://www.linkedin.com/in/ryananta-danendra-540a272a5/">
            <div className="social-link flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-8"
              >
                <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
              </svg>
              <p className="footer-link text-xs">Linked-In</p>
            </div>
          </a>
          <a href="https://www.instagram.com/agunkdanend/">
            <div className="social-link flex items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-8"
              >
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
              </svg>
              <p className="footer-link text-20px]">Instagram</p>
            </div>
          </a>
          <a href="https://www.upwork.com/freelancers/~01698fe8d20f57c056">
            <div className="social-link flex items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-8"
              >
                <path d="M493.9 359.6C443.6 359.6 410.4 320.7 401.1 305.7C413 210.4 447.9 180.3 493.9 180.3C539.4 180.3 574.8 216.7 574.8 270C574.8 323.3 539.4 359.7 493.9 359.7L493.9 359.6zM493.9 121.8C412 121.8 366.1 175.2 352.9 230.2C338 202.2 327 164.7 318.4 129.9L205.2 129.9L205.2 270.9C205.2 322 181.9 359.9 136.4 359.9C90.9 359.9 64.8 322.1 64.8 270.9L65.3 129.9L0 129.9L0 270.9C0 312 13.3 349.3 37.6 376C62.6 403.5 96.8 417.8 136.4 417.8C215.2 417.8 270.2 357.4 270.2 270.9L270.2 176.1C278.4 207.3 298 267.2 335.5 319.7L300.5 519.1L366.9 519.1L390 377.8C397.6 384.1 405.7 389.8 414.2 394.8C436.4 408.8 461.9 416.7 488.1 417.6C488.1 417.6 492.1 417.8 494.2 417.8C575.4 417.8 640.1 354.9 640.1 270C640.1 185.1 575.3 121.9 494.1 121.9L493.9 121.8z" />
              </svg>
              <p className="footer-link text-20px]"> Upwork</p>
            </div>
          </a>
        </div>
        <div className="getintouch-wrapper">
          <h1 className="text-3xl font-bold">Get In Touch</h1>
          <div className="phone flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-8"
            >
              <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
            </svg>
            <p className="footer-link">(+62) 858-5875-2663</p>
          </div>
          <div className="phone flex items-center gap-2 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-8"
            >
              <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
            </svg>
            <p className="footer-link">Denpasar, Bali</p>
          </div>
          <div className="phone flex items-center gap-2 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-8"
            >
              <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
            </svg>
            <p className="footer-link">ryanantadanendra@gmail.com</p>
          </div>
        </div>
      </div>
      <motion.h1
        initial={{ y: isMobile ? 10 : 100 }}
        whileInView={{ y: isMobile ? 39 : 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="lg:text-[13rem] md:text-[6rem] text-[5rem] text-center mt-40 lg:mt-0 font-bold"
      >
        Danendra
      </motion.h1>
    </footer>
  );
};
export default Footer;
