import React from "react"
import "./Navbar.css"


const Navbar = props => (
    <div>
        <nav>
            <ul className="unstyled">
                <li className="leeft"><strong>A Game of Clicks</strong></li>
                
                <li className="riight">Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    </div>
)

export default Navbar