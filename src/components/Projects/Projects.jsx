import React from "react";
import Card from "../Card/Card";
import { useState } from "react";
import { projects } from "../../utils/projects";
import { categories } from "../../utils/categories";
import CategoryFeed from "../CategoryFeed";
const Projects = () => {
  const [category, setCategory] = useState("All");
  return (
    <section id="projects" className="py-12 sm:px-20 md:px-28 px-10">
      <h1 className="text-blue-500 font-bold uppercase text-center text-3xl">
        My Projects
      </h1>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        <h3 className="text-xl text-black">Filter :</h3>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="py-1 px-6 text-lg rounded-2xl"
          id="categories"
        >
          {/* <option value={category}>{category}</option> */}
          {categories.map((type, index) => (
            <option
              value={type}
              key={index}
              className={`text-md hover:bg-[#407c87] transition-all cursor-pointer ${
                category === type && "text-white bg-[#407c87]"
              } px-4 transition-all border-2 border-[#407c87]`}
            >
              {type}
            </option>
          ))}
        </select>
      </div>
      {category === "All" && (
        <div className="mt-8 flex flex-col gap-4">
          {projects.map((project, id) => (
            <Card project={project} />
          ))}
        </div>
      )}
      {category === "Websites" && (
        <CategoryFeed projects={projects} category={category} />
      )}
      {category === "Landing Pages" && (
        <CategoryFeed projects={projects} category={category} />
      )}
      {category === "Ecommerce Websites" && (
        <CategoryFeed projects={projects} category={category} />
      )}
    </section>
  );
};

export default Projects;
