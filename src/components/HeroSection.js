import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Hey there.</h1>
        <h2>I'm Rittik Sarkar</h2>
        <p>
          I am a MERN stack developer with rich experience in web development
          (with occasional designing), currently an undergraduate working as a
          freelance web developer. I believe in minimalistic designs and
          efficient code and try my best to follow these practices.
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            link="/portfolio/#/contact"
          >
            Contact me
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            link="https://docs.google.com/document/d/1Y9MOuSEEcdmue51whG7lymOZHy1GqrM3pLPvTg5C9qE/edit?usp=sharing"
          >
            Grab a copy of my résumé
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
