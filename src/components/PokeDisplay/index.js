import React from "react";
import "./style.css";

function PokeDisplay(props){
    let currentPokemon = props.pokemon;
    return <p>This is where {currentPokemon} would display... If I had one!</p>;
}

export default PokeDisplay;