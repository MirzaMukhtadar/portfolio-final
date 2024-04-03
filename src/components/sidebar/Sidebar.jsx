import React, { useState } from "react";
import "./sidebar.scss";
import { motion } from "framer-motion";
import LinksNav from "./links/LinksNav";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(20px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
          <LinksNav />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </div>
  );
};

export default Sidebar;
