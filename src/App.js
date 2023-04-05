import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Header from "./components/Header";
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Header/>
        <About/>
        <Projects/>
        <Footer/>
      </BrowserRouter>
  );
}