import React from "react";
import "./DrinksGrid.css"; 

function Drinks({ drink , addToBasket}) {
  return (
    <div className="drink">
      <div className="drink-info">
        <img src={drink.image} alt={drink.name} />
        <div>
          <h2>{drink.name}</h2>
          <p>{drink.description}</p>
          <p>Price: ${drink.price.toFixed(2)}</p> 
        </div>
      </div>
      <button className="add-button" onClick={() => addToBasket({
        type: "drink",
        drink: drink.name, 
        price: drink.price})}>
                Add
            </button>
    </div>
  );
}

export default Drinks;