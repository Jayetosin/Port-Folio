import React from "react";
import About from "./About";
import Contact from "./Contact";
import Works from "./Works";
import Blog from "./Blog";
import { useState } from "react";
import "../Style/Landing.css";


const LandingContent = () => {
  const [landing, setLanding] = useState(false);
  
  return (
    <div className="bg-image" >
      

      <div className="msg-nav">
        <div className="categories">
          <div className="msg-section" onClick={() => setLanding("About")}>
            <p>About</p>
            <div
              className="msg-line"
              style={
                landing === "About"
                  ? { backgroundColor: "#747a74" }
                  : { backgroundColor: "#bac0ba" }
              }
            ></div>
          </div>
        </div>
        <div className="categories">
          <div className="msg-section" onClick={() => setLanding("Works")}>
            <p>Works</p>
            <div
              className="msg-line"
              style={
                landing === "Works"
                  ? { backgroundColor: "#747a74" }
                  : { backgroundColor: "#bac0ba" }
              }
            ></div>
          </div>
        </div>

        <div className="categories">
          <div className="msg-section" onClick={() => setLanding("Contact")}>
            <p>Contact</p>
            <div
              className="msg-line"
              style={
                landing === "Contact"
                  ? { backgroundColor: "#747a74" }
                  : { backgroundColor: "#bac0ba" }
              }
            ></div>
          </div>
        </div>

        <div className="categories">
          <div className="msg-section" onClick={() => setLanding("Blog")}>
            <p>Blog</p>
            <div
              className="msg-line"
              style={
                landing === "Blog"
                  ? { backgroundColor: "#747a74" }
                  : { backgroundColor: "#bac0ba" }
              }
            ></div>
          </div>
        </div>
      </div>
      {landing === "About" ? (
          <About />
        ) : landing=== "Works" ? (
          <Works/>
        ) : landing=== "Contact" ? (
          <Contact />
        ) : (
          <Blog />
        )}
    </div>
  );
};

export default LandingContent;
