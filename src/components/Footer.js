import React, { useState } from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submit = (e) => {
    e.preventDefault();
    fetch(`https://hooks.zapier.com/hooks/catch/8682847/ogivnfu/`, {
      method: "POST",
      body: JSON.stringify({ email, message }),
    })
      .then(() => alert("Thank you, your message has been saved successfully."))
      .catch(() => alert("There was an error, please try again"));
  };
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Contact Me</p>
        <p className="footer-subscription-text">Simply leave a message here;</p>
        <div className="input-areas">
          <form onSubmit={submit}>
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
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
      <small>Made by Rittik Sarkar with React</small>
    </div>
  );
}

export default Footer;
