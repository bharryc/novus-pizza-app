import React from "react";
import Pizza from "./components/Pizza";
import Sides from "./components/Sides";
import Drinks from "./components/Drinks";
import PizzaInfo from "./PizzaInfo";
import SidesInfo from "./SidesInfo";
import DrinksInfo from "./DrinksInfo";
import "./App.css";

function App() {

  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-name">Big Tony's Pizzas</h1>
      </header>

      <nav className="menu-nav">
        <ul>
          <li onClick={() => scroll("pizza-menu")} className="nav-item">Pizzas</li>
          <li onClick={() => scroll("sides")} className="nav-item">Sides</li>
          <li onClick={() => scroll("drinks")} className="nav-item">Drinks</li>
        </ul>
      </nav>

      <main>
        <h2 id="pizza" className="section-head">Pizza</h2>
        <div className="pizza-container">
          {PizzaInfo.map((pizza, index) => (
            <Pizza key={pizza.id} pizza={pizza} className={index === 14 ? "Half-Half" : ""} />
          ))}
        </div>

        <h2 id="sides" className="section-head">Sides</h2>
        <div className="sides-container">
          {SidesInfo.map((side) => (
            <Sides key={side.id} side={side} />
          ))}
        </div>

        <h2 id="drinks" className="section-head">Drinks</h2>
        <div className="drinks-container">
          {DrinksInfo.map((drink) => (
            <Drinks key={drink.id} drink={drink} />
          ))}
        </div>
      </main>


    </div>
  );
}

export default App;