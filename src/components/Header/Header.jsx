import React from "react";
import MTwhite from "../../assets/logo white.png";
import { useState, useEffect, useRef } from "react";
import { RiCloseFill } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";
import emailjs from "@emailjs/browser";
const Header = () => {
  const [hireOpen, setHireOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  // const [successReq, setSuccessReq] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pipn973",
        "template_fuq4wq9",
        form.current,
        "v3KrR0okDiJBE9mfU"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setHireOpen(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
          !activeNav ? "bg-none" : "bg-[#070606]"
        } fixed drop-shadow-lg w-full z-10 flex transition-all items-center justify-between py-3 md:px-24 px-4`}
      >
        <a href="#" className="flex items-center gap-3">
          <img
            onClick={() => {
              setSuccessReq(true);
              setTimeout(setSuccessReq(false), 2000);
            }}
            className="w-24"
            src={MTwhite}
            alt="logo"
          />
          {/* <h1 className="text-4xl">Mohamed Tahar</h1> */}
        </a>
        <div className="lg:flex hidden items-center gap-16">
          <a
            href="#about"
            className="text-[#c0c0c0] text-xl font-normal hover:text-white transition-all"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="text-[#c0c0c0] text-xl font-normal hover:text-white transition-all"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-[#c0c0c0] text-xl font-norma hover:text-white transition-all"
          >
            Contact
          </a>
          <div>
            <p
              className="text-xl text-white py-2 px-4 font-normal bg-neutral-600 rounded-lg hover:bg-neutral-800 transition-all cursor-pointer"
              onClick={() => setHireOpen((prev) => !prev)}
            >
              Hire Me
            </p>
          </div>
        </div>
        <div className="lg:hidden block">
          {!isOpen ? (
            <CgMenu
              onClick={() => setIsOpen((prev) => !prev)}
              size={35}
              className="text-white"
            />
          ) : (
            <RiCloseFill
              onClick={() => setIsOpen((prev) => !prev)}
              size={40}
              className="text-white"
            />
          )}
        </div>

        <div
          className={`absolute z-30 h-[100vh] sm:w-[50%] sm:h-[55vh] md:h-[80vh] lg:h-[95vh] w-full sm:top-0  ${
            hireOpen ? "sm:left-[50%] sm:translate-x-[-50%]" : "sm:left-[100%]"
          } transition-all duration-300 ${
            hireOpen ? "top-0 left-0" : "top-0 left-[100%]"
          } py-4 bg-neutral-600 rounded-lg`}
        >
          <RiCloseFill
            size={40}
            onClick={() => setHireOpen((prev) => !prev)}
            className="absolute top-2 right-2 text-white cursor-pointer"
          />
          <h4 className="text-lg pl-3 pb-4 pt-3 text-white border-b-[1px] border-opacity-5">
            Contact me for a professional website
          </h4>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5 p-16"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              name="from_name"
              className="py-2 rounded-lg px-4 placeholder-[#aaa]"
            />
            <input
              type="email"
              required
              name="email_id"
              placeholder="Email"
              className="py-2 rounded-lg px-4 placeholder-[#aaa]"
            />
            <textarea
              name="message"
              className="py-2 rounded-lg px-4 placeholder-[#aaa]"
              cols="30"
              required
              rows="10"
              placeholder="Project Description"
            ></textarea>
            <button
              onClick={(e) => {
                sendEmail();
                e.target.reset();
                setHireOpen(false);
              }}
              className="py-2 px-4 bg-[#fff] text-neutral-600 hover:bg-neutral-300 transition sm:w-1/2 w-full text-center rounded-lg"
            >
              Send Request
            </button>
          </form>
        </div>
        {/* Mobile Nav */}
        <div
          className={`${
            isOpen ? "top-16" : "-top-96"
          } absolute right-24 flex flex-col items-center z-20 transition-all duration-300 rounded-lg bg-[#070606] py-6 px-10 gap-16`}
        >
          <a
            onClick={() => setIsOpen(false)}
            href="#about"
            className="text-[#c0c0c0] text-xl font-normal hover:text-white transition-all"
          >
            About Me
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#projects"
            className="text-[#c0c0c0] text-xl font-normal hover:text-white transition-all"
          >
            Projects
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#contact"
            className="text-[#c0c0c0] text-xl font-norma hover:text-white transition-all"
          >
            Contact
          </a>
          <div>
            <p
              className="text-xl text-white py-2 px-4 font-normal bg-neutral-600 rounded-lg hover:bg-neutral-800 transition-all cursor-pointer"
              onClick={() => {
                setHireOpen((prev) => !prev);
                setIsOpen(false);
              }}
            >
              Hire Me
            </p>
          </div>
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
