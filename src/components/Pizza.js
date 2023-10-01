//import react components and css
import React, { useState } from "react";
import "./PizzaGrid.css";
// import PizzaInfo from "../PizzaInfo";
import PizzaInfo from "../PizzaInfo.json";

function Pizza({ pizza, className, addToBasket }) {

  //state variables for the base, size, price, halves of pizza and button colour
  const [selectedBase, setSelectedBase] = useState("");
  const [selectedSize, setSelectedSize] = useState("small");
  const [selectedPrice, setSelectedPrice] = useState(pizza.price.small);

  const [selectedHalf1, setSelectedHalf1] = useState("");
  const [selectedHalf2, setSelectedHalf2] = useState("");

  const [isButtonRed, setIsButtonRed] = useState(false);

  const isHalfnHalf = pizza.id === 16;
  const availablePizzas = PizzaInfo.filter((halfPizza) => halfPizza.id !== 16);

  //updates the price displayed based on the size of the pizza
  const updatePrice = (size) => {
    if (size === "small") {
      setSelectedPrice(pizza.price.small);
    } else if (size === "medium") {
      setSelectedPrice(pizza.price.medium);
    } else if (size === "large") {
      setSelectedPrice(pizza.price.large);
    } else if (size === "xl") {
      setSelectedPrice(pizza.price.xl);
    }
  };

  //changes the text for the size of the pizza
  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);
    updatePrice(newSize);
  };

  //gets name of selected pizza
  const getPizzaName = (selectedId) => {
    return PizzaInfo.find((pizza) => pizza.id === selectedId)?.name || "";
  };

  //handler for adding pizza item to basket 
  //makes sure every option has a value
  const handleAddToBasket = () => {
    // debugging stuff will remove 
    // console.log(selectedBase);
    // console.log(selectedSize);
    // console.log(isHalfnHalf);
    // console.log(selectedHalf1);

    if (isHalfnHalf) {
      if (!selectedHalf1 || !selectedHalf2 || !selectedBase || !selectedSize) {
        //button will go red when not all options are selcted
        setIsButtonRed(true);
      } else {
        addToBasket({
          type: "pizza",
          pizza: pizza.name,
          half1: getPizzaName(parseInt(selectedHalf1)),
          half2: getPizzaName(parseInt(selectedHalf2)),
          base: selectedBase,
          size: selectedSize,
          price: selectedPrice.toFixed(2),
        });
        setIsButtonRed(false);
      }
    } else {
      if (!selectedBase || !selectedSize) {
        //button will go red when not all options are selcted 
        setIsButtonRed(true);
      } else {
        addToBasket({
          type: "pizza",
          pizza: pizza.name,
          base: selectedBase,
          size: selectedSize,
          price: selectedPrice.toFixed(2),
        });
        setIsButtonRed(false);
      }
    }
  };

  return (

    <div className={`pizza ${className}`}>
      {/*pizza infomation */}
      <div className="pizza-info">
        <img src={pizza.image} alt={pizza.name} />
        <div>
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <p>Price: ${selectedPrice.toFixed(2)}</p>
        </div>
      </div>

      {/*half and half pizza section*/}
      {isHalfnHalf && (
        <div className="pizza-halves">
          <div>
            {/*half 1 option*/}
            <label htmlFor={`half1-${pizza.id}`}>Half 1:</label>
            <select
              id={`half1-${pizza.id}`}
              value={selectedHalf1}
              onChange={(e) => setSelectedHalf1(e.target.value)}
            >
              <option value="">Select pizza</option>
              {availablePizzas.map((halfPizza) => (
                <option key={halfPizza.id} value={halfPizza.id}>
                  {halfPizza.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            {/*half 2 option*/}
            <label htmlFor={`half2-${pizza.id}`}>Half 2:</label>
            <select
              id={`half2-${pizza.id}`}
              value={selectedHalf2}
              onChange={(e) => setSelectedHalf2(e.target.value)}
            >
              <option value="">Select pizza</option>
              {availablePizzas.map((halfPizza) => (
                <option key={halfPizza.id} value={halfPizza.id}>
                  {halfPizza.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="pizza-options">
        {/*options for pizza - base*/}
        <div>
          <label htmlFor={`base-${pizza.id}`}>Base:</label>
          <select
            id={`base-${pizza.id}`}
            value={selectedBase}
            onChange={(e) => setSelectedBase(e.target.value)}
          >
            <option value="">Select a base</option>
            {pizza.bases.map((base) => (
              <option key={base} value={base}>
                {base}
              </option>
            ))}
          </select>
        </div>

        <div>
          {/*options for pizza - size*/}
          <label htmlFor={`size-${pizza.id}`}>Size:</label>
          <select
            id={`size-${pizza.id}`}
            value={selectedSize}
            onChange={handleSizeChange}
          >
            <option value="small">Small (12")</option>
            <option value="medium">Medium (16")</option>
            <option value="large">Large (20")</option>
            <option value="xl">XL (24")</option>
          </select>
        </div>

        <button
          className={`add-button ${isButtonRed ? "red" : "green"}`}
          onClick={handleAddToBasket}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Pizza;