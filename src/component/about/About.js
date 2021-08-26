import React from "react";
import Navigation from "../navigation/navigation";
import photo from "../../assets/photo/val-about.png";
import "./about.scss";

const About = () => {
  return (
    <div className="About">
      <Navigation />
      <div className="about-section">
        <div className="about-img">
          <img src={photo} alt="my picturel"></img>
        </div>
        <div className="about-text">
          <p>
            Hi! I’m a Front-End Developer located in Belarus. Well-organised
            person, problem solver, independent employee with high attention to
            detail. Extremely motivated to constantly develop my skills and grow
            professionally. A family person and father of two young ladies,
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people
          </p>
        </div>
        <div className="skills">
          <div>
            <h1 className="about-title">{`Skills & expirience`}</h1>
            <p>HTML, CSS, Javascript</p>
            <p>React.js</p>
            <p>Preprocessors Sass/Less</p>
            <p>Tailwind CSS</p>
            <p>Material UI</p>
            <p> Git/Version Control </p>
          </div>
          <div>
            <h1 className="about-title">{`Soft Skills`}</h1>
            <p>Creativity</p>
            <p>Teamwork </p>
            <p>Growth Mindset</p>
            <p>Problem-solving </p>
            <p>Stress management </p>
            <p>Adaptability</p>
            <p>Cross Functional Collaboration</p>
            <p>Time Management</p>
          </div>
          <div>
            <h1 className="about-title">{`Languages`}</h1>
            <p>Russian - Native</p>
            <p>English - Upper Intermediate (B2)</p>
            <p><a href='https://www.efset.org/cert/ezUNxX'> English level certificate</a> </p>
            <p>Polish - Basic</p>
          </div>
        </div>
        <div className="experience-section">
          <div>
            <h1 className="about-title">{`Work experience`}</h1>
            <h5>2020 - Freelance Front-end Developer</h5>
          </div>
          <div>
            <h5>2018 - 2020 Belteleradiocompany Senior Video Editor</h5>
            <p>
              Editing On Air promos, feature shows, news feature, short films,
              documentary. Stack: Adobe premiere, After Effects, Photoshop,
              Edius etc,.
            </p>
          </div>
          <div>
            <h5>
              09.2010 – 12.2018 LLC "Capital Television" Video Editor
            </h5>
            <p>
              Provide support in handling administrative duties and implementing
              policies and procedures Ensure audits of the all the departments
              comply with the republic regulations Interview, hire and monitor
              works of subcontractors .
            </p>
          </div>
          <div>
            <h5>
              09.2009 – 12.2010 LLC "Tehmontagavtomatika" Deputy Director
            </h5>
            <p>
              Provide support in handling administrative duties and implementing
              policies and procedures Ensure audits of the all the departments
              comply with the republic regulations Interview, hire and monitor
              works of subcontractors .
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="about-title">{`Educational Training`}</h1>
          <h5>
            09.2020-04.2021 WildCodeSchool: fullstack Javascript developer
          </h5>
          <p>
            Web development full stack bootcamp. (English, remote) The program
            contains two main part: Frontend and Backend. Including two
            Hackathons for real companies. During this bootcamp I worked on 3
            projects and 2 hackathons.
          </p>
          <h5>2021 Frontend masters: Javascript web-developer</h5>

          <h5>2016 Stormnet: Quality Assurance</h5>
        </div>
      </div>
    </div>
  );
};
export default About;
