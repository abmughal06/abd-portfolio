import React from "react";

export default function SkillTile(props) {
    return (
        <div className="bg-background2 rounded-lg text-text px-4 py-7 w-max">
            <div className="flex flex-row justify-between items-center mb-5" >
                <p className="text-l">{props.number}</p>
                <div className="w-72"></div>
                <img src={props.image} alt="Flutter, React + Firebase" className="h-12" />
            </div>
            {/* <h2 className="text-xl mb-2">
                {props.skillName}
            </h2> */}
            <h2 className="text-l text-primary">
                {props.projects}
            </h2>
        </div>
    );
}