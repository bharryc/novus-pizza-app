import React from "react";
import "./SidesGrid.css";

function Sides({ side, addToBasket }) {
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

            <button className="add-button" onClick={() => addToBasket({side: side.name, 
                price: side.price})}>
                Add
            </button>
        </div>
    );
}

export default Sides;