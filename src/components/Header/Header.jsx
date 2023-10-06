import React from "react";
import MTwhite from "../../assets/logo white.png";
import { useState, useEffect, useRef } from "react";
import { RiCloseFill } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";
import { Link } from "react-scroll";
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
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          className="flex cursor-pointer items-center gap-3"
        >
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
        </Link>
        <div
          className={`lg:flex ${
            activeNav ? "text-white" : "text-black"
          } hidden items-center gap-10`}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-lg cursor-pointer font-normal transition-all"
          >
            About Me
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="text-lg cursor-pointer font-normal transition-all"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="text-lg cursor-pointer font-normal transition-all"
          >
            Contact
          </Link>
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
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-lg text-white cursor-pointer font-normal transition-all"
          >
            About Me
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="text-lg text-white cursor-pointer font-normal transition-all"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="text-lg text-white cursor-pointer font-normal transition-all"
          >
            Contact
          </Link>
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
