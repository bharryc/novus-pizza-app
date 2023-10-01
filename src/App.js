import React, { useState, useEffect } from "react";
import Pizza from "./components/Pizza";
import Sides from "./components/Sides";
import Drinks from "./components/Drinks";
import PizzaInfo from "./PizzaInfo.json";
import SidesInfo from "./SidesInfo.json";
import DrinksInfo from "./DrinksInfo.json";
import BasketWindow from "./components/BasketWindow"; 
import "./App.css";

function App() {
  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [basket, setBasket] = useState([]);
  const [isButtonRed, setIsButtonRed] = useState(false);

  const [isBasketWindowOpen, setIsBasketWindowOpen] = useState(false);


  const openBasketWindow = () => {
    setIsBasketWindowOpen(true);
  };
  
  const closeBasketWindow = () => {
    setIsBasketWindowOpen(false);
  };
  // debugging stuff will remove
  useEffect(() => {
    console.log("Basket Contents:", basket);
  }, [basket]);


  
  const addToBasket = (item) => {
    setBasket([...basket, item]);
    setIsButtonRed(false);
  };

  return (
    <div className="App">
      <img
        src={"/images/basket.png"}
        alt="Basket"
        className="basket"
        onClick={openBasketWindow} 
        
      />

      <BasketWindow
        isOpen={isBasketWindowOpen}
        onClose={closeBasketWindow}
        basket={basket}
        setBasket={setBasket} 
      />

      <header className="App-header">
        <div className="header-section">
          <h1 className="page-name">Big Tony's Pizzas</h1>
          <p className="page-text">Big Pizzas, Even Bigger Prices</p>
        </div>
      </header>

      <nav className="menu-nav">
        <ul>
          <li onClick={() => scroll("pizza-menu")} className="nav-item">
            Pizzas
          </li>
          <li onClick={() => scroll("sides")} className="nav-item">
            Sides
          </li>
          <li onClick={() => scroll("drinks")} className="nav-item">
            Drinks
          </li>
        </ul>
      </nav>

      <main>
        <h2 id="pizza" className="section-head">
          Pizza
        </h2>
        <div className="pizza-container">
          {PizzaInfo.map((pizza, index) => (
            <Pizza
              key={pizza.id}
              pizza={pizza}
              className={index === 14 ? "Half-Half" : ""}
              addToBasket={addToBasket}
              isButtonRed={isButtonRed}
              setIsButtonRed={setIsButtonRed}
            />
          ))}
        </div>

        <h2 id="sides" className="section-head">
          Sides
        </h2>
        <div className="sides-container">
          {SidesInfo.map((side) => (
            <Sides
              key={side.id}
              side={side}
              addToBasket={addToBasket}
            />
          ))}
        </div>

        <h2 id="drinks" className="section-head">
          Drinks
        </h2>
        <div className="drinks-container">
          {DrinksInfo.map((drink) => (
            <Drinks
              key={drink.id}
              drink={drink}
              addToBasket={addToBasket}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;