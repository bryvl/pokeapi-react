import React from "react";
import "./style.css";
import ApiBtnDiv from "../ApiBtnDiv";

function Header(props){
    return (
        <header className="banner">
            <h1>Pokémate <span>&lt;3</span></h1>
            {props.children}
        </header>
    )
}

export default Header;