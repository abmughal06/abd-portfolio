import React from "react";
import { Colors } from "../constants/Colors";
import { Link } from "react-router-dom";

export default function NavLinks(props){
    return(
        <Link to={props.a} style={{
            "color":Colors.text,
            "paddingRight":"30px",
        }}>{props.linkName}</Link>
    );
}