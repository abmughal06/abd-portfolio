import React from "react";
import { Colors } from "../constants/Colors";
import facebook_logo from "../assets/facebook2.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import { data } from "../data";

export default function Footer() {
    return (
        <section id="contact">
            <div id="footer_section" className="footer mt-20" style={{ "backgroundColor": Colors.background, "padding": "30px 70px", "justifyContent":"space-between" ,"display": "flex", "flexDirection": "row",}}>
            <p style={{"marginTop":"7px"}}>COPYRIGHT © 2023 ABDULLAH - ALL RIGHTS RESERVED.</p>
            <div className="social" style={{"display": "flex", "flexDirection": "row",}}>
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
        <a className="pr-5 hover:scale-125" href={props.url} >
            <img src={props.src} alt={props.name} />
        </a>
    );
}

