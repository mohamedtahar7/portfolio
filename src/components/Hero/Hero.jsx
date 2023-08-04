import React from "react";
import Coding from "../../assets/coding.svg";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { TbDownload } from "react-icons/tb";
import { SiTailwindcss, SiJavascript, SiReact } from "react-icons/si";
const Hero = () => {
  return (
    <section className="flex pt-6 justify-center">
      <div className="hero md:flex-row flex-col flex items-center gap-5 py-24 sm:py-24 md:px-28 px-10">
        <div className="sm:w-[50vw]">
          <h1 className="text-[3.4rem] text-[#000] font-medium leading-tight">
            Unleashing Web <br />
            Excellence
          </h1>
          <h4 className="mt-4 text-gray-700 text-2xl font-normal">
            Creating Engaging Web Experiences
          </h4>
          <div className="flex mt-5 items-center flex-row gap-3">
            <AiFillHtml5
              className="hover:-translate-y-2 transition text-[#e34c26]"
              size={40}
            />
            <IoLogoCss3
              className="hover:-translate-y-2 transition text-[#264de4]"
              size={40}
            />
            <SiTailwindcss
              className="hover:-translate-y-2 transition text-[#3490dc]"
              size={40}
            />
            <SiJavascript
              className="hover:-translate-y-2 transition rounded-sm text-[#F0DB4F] bg-[#323330]"
              size={35}
            />
            <SiReact
              className="hover:-translate-y-2 transition text-[#61dbfb]"
              size={40}
            />
          </div>
          <a
            className="py-3 w-fit px-6 mt-5 rounded-lg transition flex gap-3 items-center bg-[#a5dbdd] hover:bg-[#95c5c7]"
            href="https://drive.google.com/file/d/1Ykn1cxg0DQ7DwygvI-BPLbM4e4DqSqUA/view"
            download="Resume"
            target="_blank"
          >
            <TbDownload size={25} className="text-[#000]" />
            Download CV
          </a>
        </div>
        <div className="">
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
