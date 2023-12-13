import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <h1 className="heading">About</h1>
      <br />
      <h4 className="about_content">
        A Full Stack Web Developer with expertise in{" "}
        <span className="span">MERN</span> Stack. I've completed a comprehensive
        <span className="span">Full Stack Web Development Course</span> at Masai
        and have solved 650+ DSA problems. My tech toolkit includes{" "}
        <span className="span">
          React, Redux, JAVA, Node, Express, Mongoose, MongoDB, HTML, CSS,
          JavaScript, and Git
        </span>
        . I'm passionate about creating efficient, elegant code and have
        experience in both front-end and back-end development. I thrive on
        problem-solving and love collaborating with teams to build innovative
        solutions. Let's connect and turn ideas into reality through technology.
        You can reach me at Contact Me.
      </h4>
    </div>
  );
};

export default About;
