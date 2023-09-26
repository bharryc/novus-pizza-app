import React from "react";
import "./DrinksGrid.css"; 

function Drinks({ drink }) {
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
    </div>
  );
}

export default Drinks;