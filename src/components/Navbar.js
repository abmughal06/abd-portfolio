import React from "react";
import Logo from "../assets/icon2.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
    return (
        <nav>
            <div className="flex flex-wrap
                            items-center
                            justify-between
                            w-full
                            py-4
                            md:py-10
                            md:px-10
                            px-20
                            text-lg text-gray-700
                            bg-white">
                <Link to="">
                    <img src={Logo} alt="Logo" className="h-16" />
                </Link>
                <div className="sections-links">
                    <Link to="#about-me" className="pr-7" smooth>About</Link>
                    <Link to="#projects" className="pr-7" smooth>Projects</Link>
                    <Link to="#contact" smooth>Contact</Link>
                </div>
            </div>
        </nav>
    );
}
