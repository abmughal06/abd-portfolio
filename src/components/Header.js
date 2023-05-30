import React from "react";
import pic from "../assets/pic10.png";
import { data } from "../data";
import VerticalSpacer from "../constants/VerticalSpace.js";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:mx-48 my-5">
      <div className="lg:mb-0 mb-5 lg:text-start text-center lg:mx-0 mx-12">
        <h1 className="lg:text-4xl text-3xl text-primary">{data.title}</h1>
        <VerticalSpacer height="12" />
        <h2 className="lg:text-3xl text-2xl">{data.subtitle}</h2>
        <VerticalSpacer height="12" />
        <h2 className="lg:text-xl text-lg text-primary">{data.slogan}</h2>
        <VerticalSpacer height="12" />
        <h2 className="lg:text-sm text-xs lg:w-96 w-full">
          {data.contact_line}
        </h2>

        <VerticalSpacer height="24" />
        <span className="sm">
          <Link to="#contact" className="w-full h-full" smooth>
            <button
              type="button"
              className="rounded-lg bg-primary lg:px-7 px-10 py-3 text-sm font-medium text-text shadow-sm hover:bg-background hover:border hover:border-primary hover:scale-105 hover:text-primary transition duration 2000ms focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Contact Me
            </button>
          </Link>
        </span>
      </div>
      <div className="w-24"></div>
      <div className="border border-background2 rounded-bl-3xl rounded-tr-3xl lg:m-5 mx-12 lg:mt-0 mt-6">
        <div className="pb-1 pt-6 px-0 lg:ml-12 ml-5 lg:mt-12 mt-5 bg-background2 bg-blend-darken hover:bg-blend-lighten rounded-bl-3xl rounded-tr-3xl">
          <img src={pic} alt="developer" className="lg:w-xl md:w-md w-sm" />
        </div>
      </div>
    </div>
  );
}
