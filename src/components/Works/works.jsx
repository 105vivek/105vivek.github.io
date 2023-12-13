import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/fingerhut.jpg";
import Portfolio2 from "../../assets/alcazar.jpg";
import Portfolio3 from "../../assets/skinstore.jpg";
// import Portfolio4 from "../../assets/portfolio-4.png";
// import Portfolio5 from "../../assets/portfolio-5.png";
// import Portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="projects">
      <h2 className="worksTitle">Projects</h2>
      {/* <span className="worksDesc">
        I take pride in attention to the smallest details and How To Make
        Portfolio Website Using React JS | Create React Portfolio Website
      </span> */}
      {/* <div className="worksImages">
        <img src={Portfolio3} alt="" className="worksImg" />
        <img src={Portfolio4} alt="" className="worksImg" />
        <img src={Portfolio5} alt="" className="worksImg" />
        <img src={Portfolio6} alt="" className="worksImg" />
      </div> */}

      {/* 1 */}
      <div className="project-card">
        <div className="left">
          <img src={Portfolio1} alt="" className="worksImg" />
        </div>
        <div className="right">
          <h1 className="project-title">
            1. FingerHut (Clone of E-commerce Website)
          </h1>
          <h5 className="project-tech-stack">HTML</h5>
          <h5 className="project-tech-stack">CSS</h5>
          <h5 className="project-tech-stack">JavaScript</h5>
          <p className="project-description"></p>
          <a href="https://github.com/ArshadIqbal04/FingerHut">View Code</a>
          <a href="https://6490a66911e1f6214564ff1a--dynamic-rolypoly-491293.netlify.app/">
            View Live App
          </a>
        </div>
      </div>

      {/* 2 */}
      <div className="project-card">
        <div className="right">
          <h1 className="project-title">2. Alcazar Travel Agency</h1>

          <h3>Techstacks</h3>
          <h5 className="project-tech-stack">HTML</h5>
          <h5 className="project-tech-stack">CSS</h5>
          <h5 className="project-tech-stack">JavaScript</h5>
          <p className="project-description">
            Welcome to Alcazar Travel Agency, your gateway to unforgettable
            travel experiences! At Alcazar, we specialize in curating
            exceptional journeys that cater to your wanderlust.
          </p>
          <a href="https://github.com/yuvrajjangir/devilish-drop-2377">
            View Code
          </a>
          <a href="https://silver-selkie-a62ab9.netlify.app/">View Live App</a>
        </div>
        <div className="left">
          {/* <img src={Portfolio1} alt="" className="worksImg" /> */}
          <img src={Portfolio2} alt="" className="worksImg" />
        </div>
      </div>

      {/* 3 */}
      <div className="project-card">
        <div className="left">
          {/* <img src={Portfolio1} alt="" className="worksImg" /> */}
          <img src={Portfolio3} alt="" className="worksImg" />
        </div>
        <div className="right">
          <h1 className="project-title">3. Skin Store</h1>
          <h5 className="project-tech-stack">HTML</h5>
          <h5 className="project-tech-stack">CSS</h5>
          <h5 className="project-tech-stack">JavaScript</h5>
          <p className="project-description">
            This is clone of SkinStore.com, where we have used HTML, CSS and
            Javascript to acheive this. In this project we have tried to clone
            the “SkinStore” website. We had build up all our efforts to do our
            best in this project. As, the Masai School's Mentorship was
            specifically to build up our skills and we also accordingly
            implemented all that teachings in our project to look it at its
            best.
          </p>
          <a href="https://github.com/karnking/SkinStore">View Code</a>
          <a href="https://skinkastore.netlify.app/">View Live App</a>
        </div>
      </div>

      {/* 4 */}

      {/* <button className="worksBtn">See More</button> */}
    </section>
  );
};

export default Works;
