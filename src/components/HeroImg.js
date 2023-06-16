import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="IntroImg" className="into-img" />
      </div>
      <div className="content">
        <p>HI, I AM A FRONT END DEVELOPER</p>
        <h1>React Devoloper</h1>
        <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn">CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
