import React from "react";
import "./Game.css";

const Game = props => (

            <span onClick={() => props.clickedHouse(props.id)} className="clicked">
            <img alt={props.houseName} src={props.image} />
            </span>

)

export default Game;