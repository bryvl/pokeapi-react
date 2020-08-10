import React from "react";
import "./style.css";
import PokeStatsCard from "../PokeStatsCard";
import PokeDescriptionCard from "../PokeDescriptionCard";
import PokeSpriteCard from "../PokeSpriteCard";

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
                <PokeSpriteCard pokeSprite={currentPokemon.sprite}/>
                <PokeDescriptionCard pokeDescription={currentPokemon} />
            </div>
        </div>
    )
}

export default PokeDisplay;