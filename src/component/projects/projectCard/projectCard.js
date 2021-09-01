import React, { useState } from "react";
import "./projectCard.scss";

const ProjectCard = ({projectName,projectImage}) => {
    
  const [flipState, setFlipState] = useState(false);

  return (
    <div className="project-card">
      <div
        className={`project-card-flip ${flipState?'rotate':''}`}
        onMouseEnter={() => setFlipState(!flipState)}
        onMouseLeave={() => setFlipState(!flipState)}
      >
        <div className="card card-front">
          <div className="project-img">
            <img src={projectImage} alt="project"></img>
          </div>
          <div className="project-title">
            <h4>{projectName}</h4>
          </div>
        </div>

        <div className="card card-back">
            <h4>title describtion back</h4>
            <p>description back</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
