import React from "react";

export default function Heading(props){
    return(
        <h2 style={{
            "fontSize":props.fontSize,
            "color":props.color,
            "marginTop":props.mt,
            "width":props.w
        }}>{props.value}</h2>
    );
}