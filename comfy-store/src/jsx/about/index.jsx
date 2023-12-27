import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

const About = () => {
  return (
      <>
        <div className="container">
          <div className="info-about">
            <div className="about-title">
              <h1 className="we-love">We love</h1>
              <div className="stat">
                <div className="stat-title">comfy</div>
              </div>
            </div>
            <div className="about-parag">
              <p className="parag">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                quasi cum molestiae fugit quaerat. Non, atque. Eligendi debitis
                magnam omnis vel sapiente maxime temporibus eaque iste officiis
                laborum rerum laboriosam, repudiandae
              </p>
            </div>
          </div>
        </div>
        
      </>
  );
};

export default About;
