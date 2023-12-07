import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className="pb-12 bg-white pt-8 sm:px-20 md:px-28 px-10">
      <div className="flex lg:flex-row items-center flex-col gap-8 ">
        <motion.div
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="md:block flex justify-center"
        >
          <img
            className="lg:w-[1024px] sm:w-[80%] rounded-xl"
            src="https://i.postimg.cc/3JFScMqs/about-laptop.png"
            alt="laptop on a table"
          />
        </motion.div>
        <div className="lg:w-[200%]  h-full">
          <motion.h1
            whileInView={{ x: 0, opacity: 100 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 text-lg font-bold mb-5 uppercase"
          >
            About Me
          </motion.h1>
          <motion.p
            whileInView={{ x: 0, opacity: 100 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="sm:text-lg md:text-sm lg:text-lg font-normal text-zinc-600"
          >
            I am Mohamed Tahar, a web developer with a passion for creating
            dynamic and engaging web experiences, with a strong foundation in
            HTML, CSS, JavaScript, and its framework React JS and Next JS .{" "}
            <br /> I'm dedicated to delivering high quality code and ensuring
            the best possible user experience. With a keen eye for detail and a
            commitment to staying up to date with the latest trends and
            technologies in web development.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
