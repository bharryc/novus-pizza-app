//import react and app components
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

  //scrolls to point on screen 
  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //state variables for basket and showing the basket
  const [basket, setBasket] = useState([]);
  const [isButtonRed, setIsButtonRed] = useState(false);
  const [isBasketWindowOpen, setIsBasketWindowOpen] = useState(false);

  //function to add and remove item from basket
  const openBasketWindow = () => {
    setIsBasketWindowOpen(true);
  };

  const closeBasketWindow = () => {
    setIsBasketWindowOpen(false);
  };

  // debugging stuff
  // useEffect(() => {
  //   console.log("Basket Contents:", basket);
  // }, [basket]);

  //adds item to basket 
  const addToBasket = (item) => {
    setBasket([...basket, item]);
    setIsButtonRed(false);
  };

  return (
    <div className="App">
      {/*display the basket icon + functionality on click*/}
      <img
        src={"/images/basket.png"}
        alt="Basket"
        className="basket"
        onClick={openBasketWindow}

      />
      {/*display the basket window */}
      <BasketWindow
        isOpen={isBasketWindowOpen}
        onClose={closeBasketWindow}
        basket={basket}
        setBasket={setBasket}
      />

      {/*text at top of page*/}
      <header className="App-header">
        <div className="header-section">
          <h1 className="page-name">Big Tony's Pizzas</h1>
          <p className="page-text">Big Pizzas, Even Bigger Prices</p>
        </div>
      </header>

      {/*navigation at top of page + scroll to point on page*/}
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

      {/*pizza section rendering*/}
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

        {/*sides section rendering*/}
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

        {/*drinks section rendering*/}
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