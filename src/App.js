import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navbar/NavigationBar";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
