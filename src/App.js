import React from "react";
import { BrowserRouter as Router  } from "react-router-dom";
import Navbar1 from "./components/nav.js";
import Home from "./components/home.js";
import Skills from "./components/skills.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import Newsletter from "./components/newsletter.js";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer.js";

const App=() =>(

  <Router>

    <Navbar1 />
    <Home />
    <Skills />
    <Projects />
    <Contact />
    <Newsletter/>
    <Footer/>
    




  </Router>



)

export default App;
