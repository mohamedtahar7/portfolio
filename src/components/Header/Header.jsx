import React from "react";
import MTwhite from "../../assets/logo white.png";
import { useState, useEffect, useRef } from "react";
import { RiCloseFill } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  // const [successReq, setSuccessReq] = useState(false);
  const form = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActiveNav(true) : setActiveNav(false);
    });
  }, []);
  return (
    <div className="flex justify-center">
      <nav
        data-aos="fade-down"
        className={`${
          !activeNav ? "bg-none" : "bg-[#407c87]"
        } fixed drop-shadow-lg w-full z-10 flex transition-all items-center justify-between py-3 md:px-24 px-4`}
      >
        <a href="#" className="flex items-center gap-3">
          {activeNav ? (
            <img
              onClick={() => {
                setSuccessReq(true);
                setTimeout(setSuccessReq(false), 2000);
              }}
              className={`w-24 ${activeNav ? "block" : "hidden"}`}
              src="https://i.postimg.cc/pLwjwsM7/logo-white.png"
              alt="logo"
            />
          ) : (
            <img
              onClick={() => {
                setSuccessReq(true);
                setTimeout(setSuccessReq(false), 2000);
              }}
              className={`w-24 ${!activeNav ? "block" : "hidden"}`}
              src="https://i.postimg.cc/d0GCwGq0/logo-black.png"
              alt="logo"
            />
          )}
          {/* <h1 className="text-4xl">Mohamed Tahar</h1> */}
        </a>
        <div
          className={`lg:flex ${
            activeNav ? "text-white" : "text-black"
          } hidden items-center gap-10`}
        >
          <a href="#about" className="text-lg font-normal transition-all">
            About Me
          </a>
          <a href="#projects" className="text-lg font-normal transition-all">
            Projects
          </a>
          <a href="#contact" className="text-lg font-normal transition-all">
            Contact
          </a>
        </div>
        <div className="lg:hidden block">
          {!isOpen ? (
            <CgMenu
              onClick={() => setIsOpen((prev) => !prev)}
              size={35}
              className="text-black cursor-pointer"
            />
          ) : (
            <RiCloseFill
              onClick={() => setIsOpen((prev) => !prev)}
              size={40}
              className="text-black cursor-pointer"
            />
          )}
        </div>
        {/* Mobile Nav */}
        <div
          className={`${
            isOpen ? "top-16" : "-top-96"
          } absolute right-24 flex flex-col items-center z-20 transition-all duration-300 rounded-lg bg-[#407c87] py-6 px-10 gap-16`}
        >
          <a
            onClick={() => setIsOpen(false)}
            href="#about"
            className="text-white text-xl font-normal hover:text-white transition-all"
          >
            About Me
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#projects"
            className="text-white text-xl font-normal hover:text-white transition-all"
          >
            Projects
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#contact"
            className="text-white text-xl font-norma hover:text-white transition-all"
          >
            Contact
          </a>
        </div>
        {/* Success request msg */}
        {/* <div
          className={`bg-green-500 absolute ${
            successReq ? "top-5" : "-top-52"
          } transition-all duration-300 left-[50%] translate-x-[-50%] text-center p-4 rounded-xl `}
        >
          <h4 className="text-white text-2xl">Request Sent Successfully ✅</h4>
        </div> */}
      </nav>
    </div>
  );
};

export default Header;
