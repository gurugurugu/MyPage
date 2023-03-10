import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Popup from "./components/Popup";
import {useState} from "react";

function App() {


  return (
    <div className="font-Poppins bg-ghostWhite">
      <Navbar />
      <Home />
      <Services />
      <Blog />
      <Contact  />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
