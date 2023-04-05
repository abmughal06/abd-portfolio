import React from "react";
import pic from "../assets/mypic.png";
import { data } from "../data";
import { Colors } from "../constants/Colors";
import VerticalSpacer from "../constants/VerticalSpace.js";

export default function Header() {
  return (
    <div id="" className="flex flex-row justify-between items-center mx-48 my-5">
      <div>
        <h1 className="text-4xl" style={{ "color": Colors.primary, }}>{data.title}</h1>
        <VerticalSpacer height="12" />
        <h2 className="text-3xl">{data.subtitle}</h2>
        <VerticalSpacer height="12" />
        <h2 className="text-xl" style={{ "color": Colors.primary }}>{data.slogan}</h2>
        <VerticalSpacer height="12" />
        <h2 className="text-sm w-96">{data.contact_line}</h2>
        <VerticalSpacer height="5" />
        {/* <button style={{
          "height": "45px",
          "width": "150px",
          "marginTop": "13px",
          "backgroundColor": Colors.primary,
          "color": Colors.background2,
          "borderRadius": "10px",
          "fontSize": "medium",
          "border": "none",
          "transition": "100ms",
          "animation": "backwards",
        }}>
          Contact Me
        </button> */}
        <VerticalSpacer height="12" />
        <span className="sm">
          <button
            type="button"
            className="rounded-md border border-transparent bg-primary  px-7 py-3 text-sm font-medium text-dark shadow-sm hover:bg-background2 transition duration 2000ms hover:text-text focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Contact Me
          </button>
        </span>

      </div>
      <div className="my-pic" style={{ "height": "400px", 'width': '400px', "position": "relative" }}>
        <img src={pic} alt="developer" className="picture" style={{
          "height": '100%',
          'width': '100%',
          "position": 'absolute',
          'top': '0',
          'right': '0'
        }} />
        <div className="circle" style={{
          "height": '46%',
          // 'width': '46%',
          'marginLeft': '285px',
          'marginBottom': '10px',
          "position": 'inherit',
          "border-radius": "150px 0 0 150px",
          'backgroundColor': 'yellow'
        }}>
        </div>
      </div>
    </div>
  );
}
