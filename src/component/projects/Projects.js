import React from "react";
import Navigation from "../navigation/navigation";
import "./project.scss";
import ProjectCard from "./projectCard/projectCard";
import projectDB from "./projectDB";

const Projects = () => {
  return (
    <div className="project">
      <Navigation />
      <div className='construction'><h1>... in progress.
          <br></br>Sorry</h1></div>
      
      <h1>Portfolio</h1>
      <section className="project-section">
        {projectDB.map((el,id)=><ProjectCard
        key={id}
        projectName={el.nameProject}
        projectImage={el.imgProject}
        />)}


      </section>
    </div>
  );
};
export default Projects;
