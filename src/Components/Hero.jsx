import React from "react";
import Header from "./Header";

function Hero() {
  return (
    <div className="main-hero">
      <Header />
      <div className="main-hero-inside">
        <p>We are Flic Floc Experiences</p>
        <h1> HERE TO CREATE MOMENTS THAT LAST A LIFETIME</h1>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Hero;
