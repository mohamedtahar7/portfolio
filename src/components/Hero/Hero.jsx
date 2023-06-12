import React from "react";
import "./Hero.css";
import Coding from "../../assets/coding.svg";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { motion } from "framer-motion";
import { staggerContainer } from "../../../utils/motion";
import {
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="hero md:flex-row flex-col flex items-center gap-5 py-28 sm:py-24 md:px-28 px-10">
        <div className="hero-text">
          <h1 className="text-[3.5rem] font-medium leading-tight">
            Hi, I am <br /> Mohamed Tahar
          </h1>
          <h4 className="mt-4 hero-description text-3xl font-normal">
            A Front-End Web Developer
          </h4>
          <div className="flex mt-5 items-center flex-row gap-3">
            <AiFillHtml5
              className="hover:-translate-y-2 transition"
              size={40}
            />
            <IoLogoCss3 className="hover:-translate-y-2 transition" size={40} />
            <SiTailwindcss
              className="hover:-translate-y-2 transition"
              size={40}
            />
            <SiJavascript
              className="hover:-translate-y-2 transition rounded-sm"
              size={35}
            />
            <SiReact className="hover:-translate-y-2 transition" size={40} />
          </div>
        </div>
        <div>
          <img
            className="sm:w-[520px] w-[640px] sm:block hidden"
            src={Coding}
            alt="conding illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
