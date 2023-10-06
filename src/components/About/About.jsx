import React from "react";
import Tahar from "../../assets/me.jpeg";
const About = () => {
  return (
    <section id="about" className="pb-12 pt-8 sm:px-20 md:px-28 px-10">
      <div className="flex md:flex-row items-center flex-col gap-8 ">
        <div className="md:block flex justify-center">
          <img
            className="lg:w-[1024px] sm:w-[80%] rounded-xl"
            src={"/src/assets/social-pfp.png"}
            alt=""
          />
        </div>
        <div className="lg:w-[200%]  h-full">
          <h1 className="text-black text-2xl font-medium mb-5">About Me</h1>
          <p className="sm:text-lg md:text-sm lg:text-lg text-gray-700">
            I am Mohamed Tahar, a front end web developer with a passion for
            creating dynamic and engaging web experiences, with a strong
            foundation in HTML, CSS, JavaScript, and its framework React JS.{" "}
            <br /> I am dedicated to delivering high quality code and ensuring
            the best possible user experience. With a keen eye for detail and a
            commitment to staying up to date with the latest trends and
            technologies in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
