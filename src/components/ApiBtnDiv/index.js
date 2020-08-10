import React from "react";
import "./style.css";

function ApiBtnDiv(props){
    let isRecruiting = props.isRecruiting;
    function handleClick(e) {
        e.preventDefault();
        if(isRecruiting === false) {
            isRecruiting = true;
            alert(isRecruiting);
        } else {
            isRecruiting = false;
            alert(isRecruiting);
        }
        
    }

    return (
        <div id="apiBtnDiv">
            <button id="pokeGet" type="button" onClick={handleClick}>
                <img src="../../../dice3.png" alt="roll dice"></img>
            </button>
        </div>
    )
}

export default ApiBtnDiv;