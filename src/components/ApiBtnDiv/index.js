import React from "react";
import "./style.css";

function ApiBtnDiv(props){
    return (
        <div id="apiBtnDiv">
            {props.children}
        </div>
    )
}

export default ApiBtnDiv;