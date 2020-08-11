import React from "react";
import "./style.css";

function ApiBtn(props){
    return (
            <button id="pokeGet" type="submit" onClick={props.handleBtnClick}>
                <img src="../../../dice3.png" alt="roll dice"></img>
            </button>
    )
}

export default ApiBtn;