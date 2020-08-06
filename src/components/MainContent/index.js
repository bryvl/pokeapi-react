import React from "react";
import Greeting from "../Greeting";
import PokeDisplay from "../PokeDisplay";
import "./style.css";

function MainContent(props){
    const isRecruiting = props.isRecruiting;
    let apiPokemon = {
        name: "Terrakion",
        id: "000",
        sprite: "../../../terrakion_sprite.png",
        type: ["water", "flying"],
        stats: {
            hp: 100,
            attack: 100,
            defense: 100,
            specialAtk: 100,
            specialDef: 100,
            speed: 100
        },
        description: "This is an example description for the default Pokemon object. Just filler content here!"
    }

    if (isRecruiting) {
        return <PokeDisplay pokemon={apiPokemon}/>;
    } else {
        return <Greeting />;
    }
}

export default MainContent;