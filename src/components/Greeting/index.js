import React from "react";
import "./style.css";

function Greeting(){
    return (
        <div className="greeting">
            <h2>Welcome to Pokémate!</h2>
            <p className="introduction">We hope you find a Pokémon team that you can build a lasting relationship with for the rest of your life! </p>
            <p className="introduction instruction">Roll the dice up top to get started! <span id="love">&lt;3</span></p>
        </div>
    )
}

export default Greeting;