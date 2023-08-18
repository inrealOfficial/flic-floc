import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="main-hero">
      <Header />
      <div className="main-hero-inside">
        <p>We are Flic Floc Experiences</p>
        <h1> HERE TO CREATE MOMENTS THAT LAST A LIFETIME</h1>
        <button
          onClick={(e) => {
            navigate("/contact");
          }}
        >
          Book Now
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
