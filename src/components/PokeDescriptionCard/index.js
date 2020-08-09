import React from "react";
import "./style.css";

function PokeDescriptionCard(props){
    let currentPokemonDesc = props.pokeDescription.description;
    return (
        <div className="pokeStats pokeInfoCard">
            <p>{currentPokemonDesc}</p>
        </div>
    )
}

export default PokeDescriptionCard;