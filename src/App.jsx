import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero"
import AOS from 'aos';
import "aos/dist/aos.css";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <div>
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero />
      <About/>
      <Services/>
      <CarList/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
