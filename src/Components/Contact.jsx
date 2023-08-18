import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-page-inside">
        <h1>CONTACT US</h1>
        <div className="contact-us-form">
          <h1>Let's Plan Your Next Event</h1>
          <form action="">
            <div className="input-form">
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className="input-form">
              <input type="text" placeholder="Enter Email" />
            </div>
            <div className="input-form">
              <input type="text" placeholder="Enter Number" />
            </div>
            <div className="input-form">
              <textarea placeholder="Enter Message"></textarea>
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
