import React from "react";
import Coding from "../../assets/coding.svg";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { TbDownload } from "react-icons/tb";
import { SiTailwindcss, SiJavascript, SiReact } from "react-icons/si";
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex md:flex-row flex-col pt-6 justify-center"
    >
      <div className="hero md:flex-row flex-col flex items-center gap-5 py-24 sm:py-24 md:px-28 px-10">
        <div className="sm:w-[50vw]">
          <h1 className="text-[3.4rem] text-[#2d2e32] font-bold leading-tight">
            Full-Stack Web <br />
            Developer 👋
          </h1>
          <h4 className="mt-4 leading-10 text-gray-700 text-2xl font-normal">
            Hi, I'm Mohamed Tahar Atallah. A passionate <br /> Web Developer
            based in Algeria.
          </h4>
          <div className="flex mt-5 items-center flex-col sm:flex-row gap-5 sm:gap-3">
            <h1 className="text-md text-[#2d2e32] sm:text-lg font-medium">
              Tech Stack |{" "}
            </h1>
            <div className="flex items-center gap-3">
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="/src/assets/stack/html-5.png"
                alt="html icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="/src/assets/stack/css-3.png"
                alt="css icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="/src/assets/stack/js.png"
                alt="javascript icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="/src/assets/stack/reactjs.png"
                alt="react js icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="/src/assets/stack/nextjs.png"
                alt="next js icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={42}
                width={42}
                src="/src/assets/stack/node.png"
                alt="node js icon"
              />
              <img
                className="hover:-translate-y-2 transition-all"
                height={40}
                width={40}
                src="/src/assets/stack/tailwindcss.png"
                alt="tailwind icon"
              />
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="sm:w-[520px] w-[640px] lg:block hidden"
            src={Coding}
            alt="conding illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
