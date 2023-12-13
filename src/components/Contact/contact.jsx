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
          {/* <div className="links">
            <img src={facebookIcon} alt="" className="link" />
            <img src={twitterIcon} alt="" className="link" />
            <img src={youTubeIcon} alt="" className="link" />
            <img src={instagramIcon} alt="" className="link" />
          </div> */}
          <div className="links">
            <div id="contact-github">
              {/* <br /> */}
              <a href="https://github.com/105vivek">
                <img
                  className="contact_img"
                  // style={{ background: "white" }}
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
                <br />
                GitHUb
              </a>
            </div>
            <div id="contact-linkedin">
              {/* <br /> */}
              <a href="https://www.linkedin.com/in/vivek-yadav-332752227/">
                <img
                  className="contact_img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                  alt=""
                />
                <br />
                Linkedin
              </a>
            </div>
            <div id="contact-phone">
              {/* <br /> */}
              <a href="">
                <img
                  className="contact_img"
                  src="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-calling-vector-icon-png-image_470733.jpg"
                  alt=""
                />
                <br />
                8707710161
              </a>
            </div>
            <div id="contact-email">
              {/* <br /> */}
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <img
                  className="contact_img"
                  src="https://media.istockphoto.com/id/1125279178/vector/mail-line-icon.jpg?s=612x612&w=0&k=20&c=NASq4hMg0b6UP9V0ru4kxL2-J114O3TaakI467Pzjzw="
                  alt=""
                />
                <br />
                105vivekyadav@gmail.com
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
