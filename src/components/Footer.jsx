import React from "react";
import { Github, Linkedin, Instagram, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <footer className="sm:px-28 mt-5 px-10 bg-[#2d2e32]">
      <div className="border-b-[1px] border-[#f7f7f7]">
        <div className="py-8">
          <h1 className="text-[#f7f7f7] text-4xl text-center">Follow Me</h1>
        </div>
        <div className="flex gap-8 pb-8 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/mohamed-tahar-atallah-936b50243/"
            target="_blank"
          >
            <Linkedin className="text-[#f7f7f7] h-10 w-10 hover:text-[#b7b7b7] transition " />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-tahar-atallah-936b50243/"
            target="_blank"
          >
            <Youtube className="text-[#f7f7f7] h-10 w-10 hover:text-[#b7b7b7] transition " />
          </a>
          <a href="https://www.instagram.com/mohamed.taahar/" target="_blank">
            <Instagram className="text-[#f7f7f7] h-10 w-10 hover:text-[#b7b7b7] transition " />
          </a>
        </div>
      </div>
      <h2 className="text-center text-[#f7f7f7] p-6 shadow-2xl text-2xl">
        2023 Mohamed Tahar. All Rights Reserved.
      </h2>
    </footer>
  );
};

export default Footer;
