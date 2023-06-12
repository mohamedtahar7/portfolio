import React from "react";
import Tahar from "../../assets/me.jpeg";
import "./About.css";
const About = () => {
  return (
    <section className="py-12 sm:px-20 md:px-28 px-10">
      <div className="flex sm:flex-row items-center flex-col gap-8 ">
        <div className="">
          <img className="lg:w-[1024px] rounded-xl" src={Tahar} alt="" />
        </div>
        <div className="lg:w-[200%]  h-full">
          <h1 className="text-[#f7f7f7] text-2xl font-medium mb-5">About Me</h1>
          <p className="sm:text-lg md:text-sm lg:text-lg text-[#c0c0c0]">
            I am Mohamed Tahar, a front end web developer with a passion for
            creating dynamic and engaging web experiences, with a strong
            foundation in HTML, CSS and JavaScript. <br /> I am dedicated to
            delivering high quality code and ensuring the best possible user
            experience. With a keen eye for detail and a commitment to staying
            up to date with the latest trends and technologies in web
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
