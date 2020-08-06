import React from "react";
import "./style.css";
import PokeStatsCard from "../pokeStatsCard";

function PokeDisplay(props){
    let currentPokemon = props.pokemon;
    return (
        <div className="pokeCard">
            <h1 className="pokeName"> {currentPokemon.name} #{currentPokemon.id} </h1>
            <div className="pokeInfo">
                {/* <div className="pokeStats pokeInfoCard"></div> */}
                <PokeStatsCard 
                    hp={currentPokemon.stats.hp}
                    attack={currentPokemon.stats.attack}
                    defense={currentPokemon.stats.defense}
                    specialAtk={currentPokemon.stats.specialAtk} 
                    specialDef={currentPokemon.stats.specialDef}
                    speed={currentPokemon.stats.speed}
                />
                <div className="pokeSprite pokeInfoCard"><img src={currentPokemon.sprite} width="300px" height="300px" alt="sprite for Terrakion, a rocky four legged pokemon"/></div>
                <div className="pokeDescription pokeInfoCard"></div>
            </div>
        </div>
    )
}

export default PokeDisplay;