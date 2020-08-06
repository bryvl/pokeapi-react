import React from "react";
import "./style.css";

function PokeDisplay(props){
    let currentPokemon = props.pokemon;
    return (
        <div className="pokeCard">
            <h1 className="pokeName"> {currentPokemon.name} #{currentPokemon.id} </h1>
            <div className="pokeInfo">
                <div className="pokeStats"></div>
                <div className="pokeSprite"><img src={currentPokemon.sprite} width="300px" height="300px" alt="sprite for Terrakion, a rocky four legged pokemon"/></div>
                <div className="pokeDescription"></div>
            </div>
        </div>
    )
}

export default PokeDisplay;