import React from "react";
const Card = ({ name, description, img, link }) => {
  return (
    <div className="card bg-neutral-800  rounded-lg drop-shadow-md flex flex-col items-center justify-center hover:-translate-y-6 transition duration-300">
      <div className="mb-3  h-[100%]">
        <img className="w-[100%] rounded-t-lg" src={img} alt="website img" />
      </div>
      <div className="py-3 text-center flex-col justify-center">
        <a
          href={link}
          target="_blank"
          className="card-header outline-black mb-4 text-3xl hover:text-neutral-300 transition text-white"
        >
          {name}
        </a>
        <p className="card-description text-white text-xl hover:text-neutral-300 transition text-center">
          {description}
        </p>
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
