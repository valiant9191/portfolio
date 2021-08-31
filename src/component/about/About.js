import React from "react";
import "./about.scss";
// components 
import Navigation from "../navigation/navigation";
import Skills from "./skills/skills";
import SoftSkills from "./softSkills/softSkills";
import Languages from "./languages/languages";
import WorkExperience from "./workExpirience/workExperience";
import Education from "./education/education";
// source files 
import IntroAbout from "./introAbout/introAbout";


const About = () => {
  return (
    <div className="About">
      <Navigation />
      <div className="about-section">
        <div className="skills">
        <IntroAbout />
        </div>
        <div className="skills">
          <Skills />
          <SoftSkills />
          <Languages />
        </div>
        <div className="skills">        
        <WorkExperience />  
        </div>    
        <div className="skills">  
        <Education />
        </div>
      </div>
    </div>
  );
};
export default About;
