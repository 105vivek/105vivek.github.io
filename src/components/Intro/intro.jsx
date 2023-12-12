import React from "react";
import "./intro.css";
import bg from "../../assets/image1.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Vivek</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a skilled web Designer with experience in creating <br /> visual
          appearing and user friendly website
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} className="btnImg" alt="" /> Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="home-img" />
    </section>
  );
};

export default Intro;
