import React from "react";
import "./style.css";

function PokeBall(){
    return (
        <div className="pokeball">
            <button className="pokeballBtn">
                <div className="pokeballThruLine"></div>
                <div className="pokeballBtnEmpty">
                    <div className="pokeballBtnBtn"></div>
                </div>
            </button>
        </div>
    )
}

export default PokeBall;