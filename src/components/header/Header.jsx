import React from "react";
import "./header.scss";
import meImg from "../../assets/img/me.png";

const Header = () => {
  return (
    <div className="container">
      <div className="header-box">
        <div className="img-container">
          <img src={meImg} alt="" />
        </div>
        <div className="text-container">
          <div className="heading-text">
            <h3>Hello</h3>
          </div>
          <div className="para-text">
            <p>
              Hi, I'm Mirza Mukhtadar, a frontend developer passionate about
              transforming ideas into captivating digital experiences. With
              expertise in HTML, CSS, JavaScript, and frontend frameworks, I
              specialize in crafting intuitive interfaces that resonate with
              users. From concept to execution, I thrive on delivering
              innovative solutions that elevate brands and engage audiences.
              Let's collaborate and bring your vision to life.
            </p>
          </div>
          <div className="btn-container">
            <button>Resume</button>
            <button>Projects</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
