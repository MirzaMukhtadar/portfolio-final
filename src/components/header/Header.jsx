import React from "react";
import "./header.scss";
import meImg from "../../assets/img/me.png";
import { animate, motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Header = () => {
  return (
    <div className="container">
      <motion.div className="header-box">
        <div className="img-container">
          <img src={meImg} alt="" />
        </div>
        <div className="text-container">
          <div className="heading-text">
            <h3>Hello</h3>
          </div>
          <div className="para-text">
            <motion.p>
              Hi, I'm Mirza Mukhtadar, a frontend developer passionate about
              transforming ideas into captivating digital experiences. With
              expertise in HTML, CSS, JavaScript, and frontend frameworks, I
              specialize in crafting intuitive interfaces that resonate with
              users. From concept to execution, I thrive on delivering
              innovative solutions that elevate brands and engage audiences.
              Let's collaborate and bring your vision to life.
            </motion.p>
          </div>
          <div className="btn-container">
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
            >
              Resume
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
            >
              Projects
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 1.5 },
              }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
