import React from "react";
import "./style.css";
import CaptureDiv from "../CaptureDiv";

function PokeSpriteCard(props){
    return (
        <div className="pokeSprite pokeInfoCard">
            <img src={props.pokeSprite} width="300px" height="300px" alt="sprite for Terrakion, a rocky four legged pokemon"/>
            <CaptureDiv className="captureDiv"/>
        </div>
    )
}

export default PokeSpriteCard;