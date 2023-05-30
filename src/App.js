import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Header from "./components/Header";
import { BrowserRouter } from 'react-router-dom';
import Contact from "./components/Contact";

export default function App() {
  return (
        <BrowserRouter >
        <Navbar />
        <Header/>
        <div className="h-0.5 bg-background2 md:mt-32 mt-14  md:mx-72 mx-12" />
        <About/>
        <div className="h-0.5 bg-background2 md:mt-32 mt-14  md:mx-72 mx-12" />
        <Projects/>
        <div className="h-0.5 bg-background2 md:mt-32 mt-14  md:mx-72 mx-12" />
        <Contact/>
        <Footer/>
      </BrowserRouter>
  );
}