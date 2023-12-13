import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";
const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav id="nav-menu">
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <h1 style={{ color: "yellow" }}>Vivek </h1>
      <div className="desktopMenu">
        {/* <Link></Link> */}
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link home"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link about"
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link skills"
        >
          Skills
        </Link>

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="nav-link projects"
          // className="desktopMenuListItem"
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="nav-link resume"
          // className="desktopMenuListItem"
        >
          Resume
        </Link>
      </div>

      <button
        // className="nav-link contact"
        className="desktopMenuBtn"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
        onClick={() => {
          document
            .getElementById("contactPage")
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{ cursor: "pointer" }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      {/*hambergan menu */}
      <img
        src={menu}
        alt="Logo"
        className="mobMenu"
        onClick={() => {
          setshowMenu(!showMenu);
        }}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        {/* <Link></Link> */}
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => {
            setshowMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => {
            setshowMenu(false);
          }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="ListItem"
          onClick={() => {
            setshowMenu(false);
          }}
        >
          PortFolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => {
            setshowMenu(false);
          }}
        >
          Contact
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => {
            setshowMenu(false);
          }}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
