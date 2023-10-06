import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="sm:px-28 mt-5 px-10 bg-[#407c87]">
      <div className="border-b-[1px] border-[#f7f7f7]">
        <div className="py-8">
          <h1 className="text-[#f7f7f7] text-4xl text-center">Follow Me</h1>
        </div>
        <div className="flex gap-8 pb-8 items-center justify-center">
          <a href="https://github.com/mohamedtahar7" target="_blank">
            <BsGithub
              size={40}
              className="text-[#f7f7f7] hover:text-[#b7b7b7] transition "
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-tahar-atallah-936b50243/"
            target="_blank"
          >
            <BsLinkedin
              size={40}
              className="text-[#f7f7f7] hover:text-[#b7b7b7] transition "
            />
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
