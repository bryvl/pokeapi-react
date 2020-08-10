import React from "react";
import "./style.css";
import ApiBtnDiv from "../ApiBtnDiv";

function Header(){
    return (
        <header className="banner">
            <h1>Pokémate <span>&lt;3</span></h1>
            <ApiBtnDiv />
        </header>
    )
}

export default Header;