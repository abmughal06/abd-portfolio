import React from "react";
// import PropTypes from 'prop-types'
export default function VerticalSpacer(props){
    return(
        <div className="vertical-space" style={{height: props.height+"px"}}/>
    );
}
