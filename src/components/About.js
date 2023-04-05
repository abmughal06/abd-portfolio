import React from "react";
import { data } from "../data";
import SkillTile from "../mini-components/SkillTile";
import VerticalSpacer from "../constants/VerticalSpace";
import Flutter from "../assets/skill-icon/1.png";
import ReactImg from "../assets/skill-icon/2.png";

export default function About() {
  return (
    <section id="about-me" className="pt-20">
      <div className="mx-32">
        <p className="text-primary text-3xl mb-3 ml-1">About.</p>
        <div className="introduction flex flex-row">
          <div className="mr-10">
            <div>
              <SkillTile number=".01" skillName="Flutter + Firebase" image={Flutter} projects="15+ Projects" />
              <VerticalSpacer height="15" />
              <SkillTile number=".02" skillName="React + Firebase" image={ReactImg} projects="10+ Projects" />
            </div>
            <div className="skill-intro"></div>
          </div>
          <div className="text-sm items-center text-justify">
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
