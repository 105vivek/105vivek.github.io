import React from "react";
import UIDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

import "./skills.css";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in.{" "}
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p> This is demo content. You can write your own content</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>website Design</h2>
            <p>This is demo content. You can write your own content</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is demo content. You can write your own content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
