import React from "react";
import Card from "../Card/Card";
import "./Projects.css";
import Netflix from "../../../public/projects imgs/netflix2.jpg";
import Omnifood from "../../../public/projects imgs/omnifood.jpg";
const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:px-20 md:px-28 px-10">
      <h1 className="projects-header text-center text-3xl">My Projects</h1>
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10 mt-10">
        <Card
          img="/projects imgs/movimania.jpg"
          name="MovieMania"
          description="MovieMania Website"
          link="https://moviemania-mohamedtahar.netlify.app/"
        />
        <Card
          img="/projects imgs/omnifood.jpg"
          name="Omnifood"
          description="Restaurant Landing Page"
          link="https://omnifood-mohamed-tahar.netlify.app/"
        />
        <Card
          img="/projects imgs/metaversus.jpg"
          name="MetaVersus"
          description="MetaVersus Landing Page"
          link="https://metaversus-mohamedtahar.netlify.app/"
        />
        <Card
          img="/projects imgs/hoobank.jpg"
          name="Hoobank"
          description="Hoobank Landing Page"
          link="https://hoobank-mohamedtahar.netlify.app/"
        />
        <Card
          img="/projects imgs/shopit.jpg"
          name="ShopIt"
          description="Ecommerce Website"
          link="https://shopit-mohamedtahar.netlify.app/"
        />
        <Card
          img="/projects imgs/dataware.jpg"
          name="DataWarehouse"
          description="DataWarehouse Landing Page"
          link="https://datawarehouse-mohamedtahar.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
