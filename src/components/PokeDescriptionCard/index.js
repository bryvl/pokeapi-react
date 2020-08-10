import React from "react";
import "./style.css";

function PokeDescriptionCard(props){
    let currentPokemonDesc = props.pokeDescription.description;
    return (
        <div className="pokeDescription pokeInfoCard">
            <p className="">" {currentPokemonDesc} "</p>
        </div>
    )
}

export default PokeDescriptionCard;