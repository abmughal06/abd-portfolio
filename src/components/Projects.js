import React from "react";
import p1 from "../assets/projects logo/1.png";
import p2 from "../assets/projects logo/2.png";
import p3 from "../assets/projects logo/3.png";
import p4 from "../assets/projects logo/4.png";
import p5 from "../assets/projects logo/5.png";
import p6 from "../assets/projects logo/6.png";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="project-section">
                <h3 className="text-primary text-3xl text-center pb-16">Projects</h3>
                <div className="flex flex-row justify-evenly pb-12">
                    <ProjLogo image={p1} />
                    <ProjLogo image={p2} />
                    <ProjLogo image={p3} />
                </div>
                <div className="flex flex-row justify-evenly">
                    <ProjLogo image={p4} />
                    <ProjLogo image={p5} />
                    <ProjLogo image={p6} />
                </div>
            </div>
        </section>
    );
}

function ProjLogo(props) {
    return (
        <img src={props.image} alt="project logo"
            className="bg-text p-7 h-40 rounded-full opacity-60 
                        transition-transform duration-1000 
                        hover:scale-110 hover:opacity-100 
                        hover:transition-opacity 
                        hover:duration-1000 
                        hover:rounded-3xl hover:p-5" />
    );
}