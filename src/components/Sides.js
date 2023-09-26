import React from "react";
import "./SidesGrid.css"; 

function Sides({ side }) {
    return (
        <div className="side">
            <div className="side-info">
                <img src={side.image} alt={side.name} />
                <div>
                    <h2>{side.name}</h2>
                    <p>{side.description}</p>
                    <p>Price: ${side.price.toFixed(2)}</p> 
                </div>
            </div>
        </div>
    );
}

export default Sides;