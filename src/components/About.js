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
    <section id="about-me" className="pt-32">
      <div className="mx-48">
        <div className="flex flex-row">
          <div className="mr-5 w-1/2">
            <div className="grid grid-rows-3 grid-flow-col gap-20 ">
              <img src={flutter} alt="flutter icon" className="w-20 h-20"/>
              <img src={firebase} alt="firebase icon" className="w-20 h-20"/>
              <img src={react} alt="react icon" className="w-20 h-20"/>
              <img src={mongo} alt="mongo icon" className="w-20 h-20"/>
              <img src={github} alt="github icon" className="w-20 h-20"/>
              <img src={html} alt="html icon" className="w-20 h-20"/>
              <img src={css} alt="css icon" className="w-20 h-20"/>
              <img src={bootstrap} alt="bootstrap icon" className="w-20 h-20"/>
              <img src={aws} alt="aws icon" className="w-20 h-20"/>
            </div>
          </div>
          <div className="text-sm items-center text-justify w-1/2">
            <p className="text-primary text-3xl mb-5">About.</p>
            <p>Hi there,</p>
            <p className="pt-5">{data.aboutP1}</p>
            <p className="pt-5">{data.aboutP2}</p>
            <p className="pt-5">{data.aboutP3}</p>
            <p className="pt-5">{data.aboutP4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
