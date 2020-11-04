import React, { useState } from "react";
import "./Footer.css";
import { Button } from "./Button";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submit = (e) => {
    alert("Thank you. Your message has been saved successfully.");
  };
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Contact Me</p>
        <p className="footer-subscription-text">Simply leave a message here;</p>
        <div className="input-areas">
          <form
            method="POST"
            action="https://ritsar-server.herokuapp.com/submit-form"
            onSubmit={submit}
          >
            <label htmlFor="email">
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <input type="hidden" name="page" value={window.location.href} />
            <label htmlFor="message">
              <textarea
                className="footer-input message"
                rows="2"
                name="message"
                type="text"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <Button
                buttonStyle="btn--outline"
                className="sendButton"
                type="submit"
              >
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                Send
              </Button>
            </label>
          </form>
        </div>
      </section>

      <p className="footer-subscription-text">or, let's connect through:</p>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="mailto:sarkarrittik8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a
              className="social-icon-link "
              href=" https://wa.me/918119919103"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a
              className="social-icon-link"
              href=" https://github.com/RitSar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              className="social-icon-link"
              href=" https://www.linkedin.com/in/rittik-sarkar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
      <p className="fiverr">
        Hire me on{" "}
        <a
          href="https://www.fiverr.com/share/Eraoj7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          fiverr
        </a>{" "}
      </p>

      <small>Made with React by Rittik Sarkar </small>
    </div>
  );
}

export default Footer;
