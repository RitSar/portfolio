import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "../Button";
import Loading from "../Loading";

export default function Products() {
  return (
    <div className="aboutPage">
      <Loading />

      <div className="hero-container">
        <div className="hero-text">
          <h1>Hello again!</h1>
          <h2>I am Rittik Sarkar</h2>
          <p>
            As mentioned before I am a MERN stack developer, and I enjoy
            designing and developing web applications. I am a third year student
            of IIIT Agartala and technical secretatary to EBSB club of the
            institute. I like spending my free time watching movies,
            documentaries, playing and developing video-games and solving
            brainstorming puzzles. I have been an ACM member since 2019 and
            follow their technology articles regularly to keep myself updated.
          </p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              link="/contact"
            >
              Contact me
            </Button>
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              link="https://docs.google.com/document/d/1Y9MOuSEEcdmue51whG7lymOZHy1GqrM3pLPvTg5C9qE/edit?usp=sharing"
            >
              Grab a copy of my resume
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
