import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Card = ({ project }) => {
  const { name, link, img, description } = project;
  return (
    <div className="card bg-[#407c87]  rounded-lg drop-shadow-md flex flex-col items-center justify-center">
      <div className="mb-3  h-[100%]">
        <img className="w-[100%] rounded-t-lg" src={img} alt="website img" />
      </div>
      <div className="py-3 flex-col justify-center">
        <h3
          target="_blank"
          className="card-header outline-black mb-2 text-3xl text-white"
        >
          {name}
        </h3>
        <p className="card-description mb-2 text-white text-xl">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          className="flex text-lg py-2 px-4 bg-[#d3e1e2] w-fit rounded-lg text-black hover:opacity-90 transition gap-3 items-center"
        >
          View More <BsArrowRight size={25} />
        </a>
        {/* <a
          href={link}
          target="blank"
          className="flex underline items-center justify-center card-description text-white text-2xl hover:text-neutral-300 transition cursor-pointer mt-3"
        >
          <p>Check It Out </p>
          <span className="text-white ml-2 hover:text-neutral-300">
            <HiExternalLink />
          </span>
        </a> */}
      </div>
    </div>
  );
};

export default Card;
