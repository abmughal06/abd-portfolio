import React from "react";    
import pic from "../assets/pic10.png";
import { data } from "../data";
import VerticalSpacer from "../constants/VerticalSpace.js";
import facebook_logo from "../assets/facebook2.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";

export default function Header() {
  return (
    <div id="" className="flex flex-row justify-between items-center mx-48 my-5">
      <div>
        <h1 className="text-4xl text-primary">{data.title}</h1>
        <VerticalSpacer height="12" />
        <h2 className="text-3xl">{data.subtitle}</h2>
        <VerticalSpacer height="12" />
        <h2 className="text-xl text-primary" >{data.slogan}</h2>
        <VerticalSpacer height="12" />
        <h2 className="text-sm w-96">{data.contact_line}</h2>
        <VerticalSpacer height="18" />
        <div className="social" style={{"display": "flex", "flexDirection": "row",}}>
                <SocialLinks url={data.socialLinks.facebook} src={facebook_logo} name="Facebook"/>
                <SocialLinks url={data.socialLinks.instagram} src={instagram} name="Instagram"/>
                <SocialLinks url={data.socialLinks.linkedin} src={linkedin} name="Linkedin"/>
                <SocialLinks url={data.socialLinks.github} src={github} name="Github"/>
                <SocialLinks url={data.socialLinks.twitter} src={twitter} name="Twitter"/>
            </div>
        <VerticalSpacer height="24" />
        <span className="sm">
          <button
            type="button"
            className="rounded-lg bg-primary px-7 py-3 text-sm font-medium text-text shadow-sm hover:bg-background hover:border hover:border-background2 hover:scale-105 hover:text-background2 transition duration 2000ms focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Contact Me
          </button>
        </span>

      </div>
        <div className="border border-background2 rounded-bl-3xl rounded-tr-3xl">
          <div className="pb-1 pt-6 px-1 ml-12 mt-12 bg-background2 bg-blend-darken hover:bg-blend-lighten rounded-bl-3xl rounded-tr-3xl">
            <img src={pic} alt="developer" className="max-w-xl" />
          </div>
        </div>
      </div>
  );
}

function SocialLinks(props){
  return(
      <a className="pr-5 hover:scale-110" href={props.url} >
          <img src={props.src} alt={props.name} className="background-background2" />
      </a>
  );
}
