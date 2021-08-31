import React from "react";

const WorkExperience = () => {
  return (
    <div className="experience-section">
      <div className="expo-block">
        <h1 className="about-title">{`Work experience`}</h1>
        <br />
        <h5 className='job-title'>2020 - Freelance Front-end Developer</h5>
      </div>
      <hr />
      <div className="expo-block">
        <h5 className='job-title'>2018 - 2020 Belteleradiocompany Senior Video Editor</h5>
        <p className='job-text'>
          Editing On Air promos, feature shows, news feature, short films,
          documentary. Stack: Adobe premiere, After Effects, Photoshop, Edius
          etc,.
        </p>
      </div>
      <hr />
      <div className="expo-block">
        <h5 className='job-title'>09.2010 – 12.2018 LLC "Capital Television" Video Editor</h5>
      </div>
      <hr />
      <div className="expo-block">
        <h5 className='job-title'>09.2009 – 12.2010 LLC "Tehmontagavtomatika" Deputy Director</h5>
        <p className='job-text'>
          Provide support in handling administrative duties and implementing
          policies and procedures Ensure audits of the all the departments
          comply with the republic regulations Interview, hire and monitor works
          of subcontractors .
        </p>
      </div>
    </div>
  );
};
export default WorkExperience;
