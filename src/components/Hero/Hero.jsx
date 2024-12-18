import React from "react";
import Coding from "../../assets/coding.svg";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { TbDownload } from "react-icons/tb";
import { motion } from "framer-motion";
import me from "../../assets/me2.png";
import { SiTailwindcss, SiJavascript, SiReact } from "react-icons/si";
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex md:flex-row flex-col pt-6 justify-center"
    >
      <div className="hero md:flex-row flex-col flex items-center gap-5 py-24 sm:py-24 md:px-28 px-10">
        <div className="sm:w-[50vw]">
          <motion.h1
            whileInView={{ x: 0, opacity: 100 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[3.4rem] text-[#2d2e32] font-bold leading-tight"
          >
            Full-Stack Web <br />
            Developer 👋
          </motion.h1>
          <motion.h4
            whileInView={{ x: 0, opacity: 100 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 leading-10 text-gray-700 text-2xl font-normal"
          >
            Hi, I'm Mohamed Tahar Atallah. A passionate <br /> Web Developer
            based in Algeria.
          </motion.h4>
          <motion.div
            whileInView={{ x: 0, opacity: 100 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex mt-5 items-center flex-col sm:flex-row gap-5 sm:gap-3"
          >
            <h1 className="text-md text-[#2d2e32] sm:text-lg font-medium">
              Tech Stack |{" "}
            </h1>
            <div className="flex items-center gap-3">
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="https://i.postimg.cc/PrRrg70q/html-5.png"
                alt="html icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="https://i.postimg.cc/zvDGNYJy/css-3.png"
                alt="css icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="https://i.postimg.cc/44w35y5V/js.png"
                alt="javascript icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="https://i.postimg.cc/N01srjFy/reactjs.png"
                alt="react js icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="https://i.postimg.cc/Vv7LLZ6D/nextjs.png"
                alt="next js icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={42}
                width={42}
                src="https://i.postimg.cc/K83vxNyD/node.png"
                alt="node js icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="https://i.postimg.cc/V6Wk2kcy/tailwindcss.png"
                alt="tailwind icon"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <img
            className="sm:w-[380px] w-[640px] rounded-full lg:block "
            src={me}
            alt="Mohamed Tahar"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
