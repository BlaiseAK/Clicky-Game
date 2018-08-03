import React from "react";
import "./Game.css";

const Game = props => (
    <img alt={props.houseName} src={props.image} onClick={() => props.clickedHouse(props.id)} className="clicked"/>
)

export default Game;