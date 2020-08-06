import React from "react";
import "./style.css";

function PokeStatsCard(props){
    let currentPokemonStats = props;
    return (
        <div className="pokeStats pokeInfoCard">
            <p>Hp: {currentPokemonStats.hp}</p>
            <p>Atk: {currentPokemonStats.attack}</p>
            <p>Def: {currentPokemonStats.defense}</p>
            <p>Special Atk: {currentPokemonStats.specialAtk}</p>
            <p>Special Def: {currentPokemonStats.specialDef}</p>
            <p>Speed: {currentPokemonStats.speed}</p>
        </div>
    )
}

export default PokeStatsCard;