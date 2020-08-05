import React from "react";
import Greeting from "../Greeting";
import PokeDisplay from "../PokeDisplay";
import "./style.css";

function MainContent(props){
    const isRecruiting = props.isRecruiting;
    if (isRecruiting) {
        return <PokeDisplay pokemon={"Charmander"}/>;
    } else {
        return <Greeting />;
    }
}

export default MainContent;