import React from "react";
import { data } from "../data";
import firebase from "../assets/skill-icons/firebase.png";
import github from "../assets/skill-icons/github.png";
import flutter from "../assets/skill-icons/3.png";
import react from "../assets/skill-icons/react.png";
import mongo from "../assets/skill-icons/mongo.png";
import html from "../assets/skill-icons/html.png";
import css from "../assets/skill-icons/css.png";
import bootstrap from "../assets/skill-icons/bootstrap.png";
import aws from "../assets/skill-icons/aws.png";
// import firebase from "../assets/skill-icons/firebase.png";
// import firebase from "../assets/skill-icons/firebase.png";
// import firebase from "../assets/skill-icons/firebase.png";
// import firebase from "../assets/skill-icons/firebase.png";
// import firebase from "../assets/skill-icons/firebase.png";

export default function About() {
  return (
    <section id="about-me" className="lg:pt-32 pt-14 flex flex-col lg:flex-row lg:mx-48 mx-7">
      <div className="grid grid-rows-3 grid-flow-col justify-center lg:gap-x-20 md:gap-x-16 gap-y-20 gap-20 lg:mr-5 lg:w-1/2 w-full">
        <img
          src={flutter}
          alt="flutter icon"
          className="lg:w-20 lg:h-20 w-16 h-16 hover:scale-125"
        />
        <img
          src={firebase}
          alt="firebase icon"
          className="lg:w-20 lg:h-20 w-16 h-16 hover:scale-125"
        />
        <img
          src={react}
          alt="react icon"
          className="lg:w-20 lg:h-20 w-16 h-16 hover:scale-125"
        />
        <img
          src={mongo}
          alt="mongo icon"
          className="lg:w-20 lg:h-20 w-16 h-16 hover:scale-125"
        />
        <img
          src={github}
          alt="github icon"
          className="lg:w-20 lg:h-20 w-16 h-16 hover:scale-125"
        />
        <img src={html} alt="html icon" className="lg:w-20 lg:h-20 w-16 h-16 hover:scale-125" />
        <img src={css} alt="css icon" className="lg:w-20 lg:h-20 w-16 h-16 hover:scale-125" />
        <img
          src={bootstrap}
          alt="bootstrap icon"
          className="lg:w-20 lg:h-20 w-16 h-16 hover:scale-125"
        />
        <img src={aws} alt="aws icon" className="lg:w-20 lg:h-20 w-16 h-16 hover:scale-125" />
      </div>
      <div className="h-10"></div>
      <div className="text-sm items-center text-justify lg:w-1/2 w-full">
        <p className="text-primary text-3xl mb-5">About.</p>
        <p>Hi there,</p>
        <p className="pt-5">{data.aboutP1}</p>
        <p className="pt-5">{data.aboutP2}</p>
        <p className="pt-5">{data.aboutP3}</p>
        <p className="pt-5">{data.aboutP4}</p>
      </div>
    </section>
  );
}
