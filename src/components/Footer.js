import React from "react";
import facebook_logo from "../assets/facebook2.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import { data } from "../data";

export default function Footer() {
    return (
        <section id="contact">
            <div id="footer_section" className="footer flex flex-col lg:flex-row mt-20 mb-12 lg:mx-48 mx-10 justify-between" >
            <p className="mt-7 lg:mb-0  mb-5 lg:text-left text-center">COPYRIGHT © 2023 ABDULLAH - ALL RIGHTS RESERVED.</p>
            <div className="flex justify-center" >
                <SocialLinks url={data.socialLinks.facebook} src={facebook_logo} name="Facebook"/>
                <SocialLinks url={data.socialLinks.instagram} src={instagram} name="Instagram"/>
                <SocialLinks url={data.socialLinks.linkedin} src={linkedin} name="Linkedin"/>
                <SocialLinks url={data.socialLinks.github} src={github} name="Github"/>
                <SocialLinks url={data.socialLinks.twitter} src={twitter} name="Twitter"/>
            </div>
        </div>
        </section>
    );
}

function SocialLinks(props){
    return(
        <a className="lg:pr-5 p-2 hover:scale-125" href={props.url} >
            <img src={props.src} alt={props.name} />
        </a>
    );
}

