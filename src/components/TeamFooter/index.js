import React from "react";
import "./style.css";

function TeamFooter(props){
    let team = props.team;
    // team should maybe be an array that is always of length 6 with value of "empty" for unfilled slots
    // i.e: 1- Squirtle, 2- Umbreon, 3- Pidgeotto, 4- empty, 5- empty, 6- empty
    // for (i = 0; i < team.length; i++;) {
    //      if(team[i] !== "empty") {
    //          get and display name and pokeball for team[i]
    //      } else {
    //          display "empty" and gray ball  
    //      }
    // }
    return (
        <div>
            <footer>
                <div className="pokemonSlot">
                    <header>Empty</header>
                    <div>Ball</div>
                </div>
                <div className="pokemonSlot">
                    <header>Empty</header>
                    <div>Ball</div>
                </div>
                <div className="pokemonSlot">
                    <header>Empty</header>
                    <div>Ball</div>
                </div>
                <div className="pokemonSlot">
                    <header>Empty</header>
                    <div>Ball</div>
                </div>
                <div className="pokemonSlot">
                    <header>Empty</header>
                    <div>Ball</div>
                </div>
                <div className="pokemonSlot">
                    <header>Empty</header>
                    <div>Ball</div>
                </div>
            </footer>
        </div>
    )
}

export default TeamFooter;