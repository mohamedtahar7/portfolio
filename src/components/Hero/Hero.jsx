import React from "react";
import Coding from "../../assets/coding.svg";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { TbDownload } from "react-icons/tb";
import { SiTailwindcss, SiJavascript, SiReact } from "react-icons/si";
const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="hero md:flex-row flex-col flex items-center gap-5 py-28 sm:py-24 md:px-28 px-10">
        <div className="text-[#f7f7f7]">
          <h1 className="text-[3.5rem] font-medium leading-tight">
            Hi, I am <br /> Mohamed Tahar
          </h1>
          <h4 className="mt-4 text-[#c0c0c0] text-3xl font-normal">
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
          <a
            className="py-3 w-fit px-6 mt-5 rounded-lg transition flex gap-3 items-center bg-neutral-600 hover:bg-neutral-800"
            href="https://drive.google.com/file/d/1Ykn1cxg0DQ7DwygvI-BPLbM4e4DqSqUA/view"
            download="Resume"
            target="_blank"
          >
            <TbDownload size={25} className="text-[#f7f7f7]" />
            Download CV
          </a>
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
