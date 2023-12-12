import React, { useRef } from "react";
import "./contact.css";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import youTubeIcon from "../../assets/youtube.png";
import instagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8n0dp4m",
        "template_uwdyww3",
        form.current,
        "DmgHT3QLyxevLOKlC"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form ref={form} onSubmit={sendEmail} action="" className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="your email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={facebookIcon} alt="" className="link" />
            <img src={twitterIcon} alt="" className="link" />
            <img src={youTubeIcon} alt="" className="link" />
            <img src={instagramIcon} alt="" className="link" />
          </div>
        </form>
      </div>
      <div className="network">
        <div id="contact-github">
          <a href="https://github.com/105vivek">GitHUb</a>
        </div>
        <div id="contact-linkedin">
          <a href="https://www.linkedin.com/in/vivek-yadav-332752227/">
            Linkedin
          </a>
        </div>
        <div id="contact-phone">8707710161</div>
        <div id="contact-email">
          <a href="https://mail.google.com/mail/u/0/#inbox">
            105vivekyadav@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
