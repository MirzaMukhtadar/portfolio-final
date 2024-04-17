import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navbar/NavigationBar";
import { Footer } from "./components/footer/Footer";
import Resume from "./pages/resume/Resume";
import Projects from "./pages/projects/Projects";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
