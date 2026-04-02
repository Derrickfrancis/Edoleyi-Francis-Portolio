import { useState, useEffect } from "react";
import { NAV_LINKS } from "./data";
import "./styles/global.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Resume from "./components/sections/Resume";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");

  // Track which section is in view for the navbar highlight
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120;
      for (const name of NAV_LINKS) {
        const el = document.getElementById(name.toLowerCase());
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(name);
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d0f1a" }}>
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About scrollTo={scrollTo} />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
