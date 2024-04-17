import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <div className="logo">
          <div className="circle"></div> <Link to="/">Mirza Mukhtadar</Link>
        </div>
        <div className="social">
          <Link to="/resume">
            <p>Resume</p>
          </Link>
          <Link to="/projects">
            <p>Projects</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
