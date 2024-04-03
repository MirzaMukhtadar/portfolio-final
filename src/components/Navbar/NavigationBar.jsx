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
          <div className="circle"></div> Mirza Mukhtadar
        </div>
        <div className="social">
          <Link to="">
            <p>Resume</p>
          </Link>
          <Link to="">
            <p>Projects</p>
          </Link>
          <Link to="">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
