//import react component and css
import React from "react";
import "./SidesGrid.css";

//displays the sides component
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
            {/*button to add to basket*/}
            <button className="add-button" onClick={() => addToBasket({
                type: "side", side: side.name,
                price: side.price
            })}>
                Add
            </button>
        </div>
    );
}

export default Sides;