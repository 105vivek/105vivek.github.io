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
          I'm <span className="introName">Vivek Yadav</span>
          <br />
          Full Stack Web Developer.
          {/* <br /> */}
        </span>
        {/* <br /> */}
        {/* <br /> */}
        <p className="introPara">
          A motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
          You can reach me at{" "}
          <a
            onClick={() => {
              document
                .getElementById("contactPage")
                .scrollIntoView({ behavior: "smooth" });
            }}
            style={{ cursor: "pointer" }}
            href=""
          >
            Contact Me
          </a>
        </p>

        <Link>
          <button className="btn">
            <img src={btnImg} className="btnImg" alt="" /> Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="home-img" />
      {/* <br /> */}
    </section>
  );
};

export default Intro;
