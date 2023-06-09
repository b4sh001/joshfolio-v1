import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Background from "./components/Background.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <AboutMe />
    <Background />
    <Skills />
    <Projects />
    <Experience />
    <Footer />
  </React.StrictMode>
);
