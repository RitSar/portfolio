import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Skills from "../Skills";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="bodyContainer">
        <Cards />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default Home;
