import React from "react";
import photo from "../../../assets/photo/val-about.png";

const IntroAbout = () => {
  return (
    <div className="intro-about">
      <div className="intro-img">
        <img src={photo} alt="my picturel"></img>
      </div>
      <p className="intro-text">
        Hi! I’m a Front-End Developer located in Belarus.
        <br /> 
        Well-organised person, problem solver, independent employee with
        high attention to detail. Extremely motivated to constantly develop my
        skills and grow professionally. A family person and father of two young
        ladies, Interested in the entire frontend spectrum and working on
        ambitious projects with positive people
      </p>
    </div>
  );
};

export default IntroAbout;
