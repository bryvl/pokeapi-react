import React from "react";
import "./style.css";

function PokeStatsCard(props){
    let currentPokemonStats = props;
    return (
        <div className="pokeInfoCard">
            <table className="pokeStats">
                <h1 className="statsHeader">Stats</h1>
                <tr>Hp: {currentPokemonStats.hp}</tr>
                <tr>Atk: {currentPokemonStats.attack}</tr>
                <tr>Def: {currentPokemonStats.defense}</tr>
                <tr>Special Atk: {currentPokemonStats.specialAtk}</tr>
                <tr>Special Def: {currentPokemonStats.specialDef}</tr>
                <tr>Speed: {currentPokemonStats.speed}</tr>
            </table>
        </div>
    )
}

export default PokeStatsCard;