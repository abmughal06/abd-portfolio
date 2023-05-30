import React from "react";
import p1 from "../assets/projects logo/1.png";
import p2 from "../assets/projects logo/2.png";
import p3 from "../assets/projects logo/3.png";
import p4 from "../assets/projects logo/4.png";
import p5 from "../assets/projects logo/5.png";
import p6 from "../assets/projects logo/6.png";
import p7 from "../assets/projects logo/7.png";
import p8 from "../assets/projects logo/8.png";

export default function Projects() {
  return (
    <section id="projects" className="lg:pt-32 pt-12">
     
      <div className="project-section">
        <h3 className="text-primary text-3xl text-center pb-16 ">Projects</h3>
        <div className="grid lg:grid-rows-2 md:grid-rows-3 grid-rows-4 grid-flow-col justify-center lg:gap-x-32 gap-x-8 lg:gap-y-16 gap-y-10 w-full">
        <ProjLogo image={p7} />
        <ProjLogo image={p2} />
        <ProjLogo image={p8} />
        <ProjLogo image={p3} />
        <ProjLogo image={p4} />
        <ProjLogo image={p5} />
        <ProjLogo image={p6} />
        <ProjLogo image={p1} />
      </div>
      </div>
    </section>
  );
}

function ProjLogo(props) {
  return (
    <img
      src={props.image}
      alt="project logo"
      className="bg-text p-7 lg:h-40 h-36 lg:w-40 w-36 rounded-full opacity-60 
                        transition-transform duration-1200 
                        hover:scale-125 hover:opacity-100 
                        hover:transition-opacity 
                        hover:duration-1200 
                        hover:rounded-3xl hover:p-5"
    />
  );
}
