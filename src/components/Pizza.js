import React, { useState } from "react";
import "./PizzaGrid.css";
import PizzaInfo from "../PizzaInfo";

function Pizza({ pizza, className }) {
    const [selectedBase, setSelectedBase] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const [selectedHalf1, setSelectedHalf1] = useState('');
    const [selectedHalf2, setSelectedHalf2] = useState('');

    const isHalfnHalf = pizza.id === 16;
    const availablePizzas = PizzaInfo.filter((halfPizza) => halfPizza.id !== 16);

    return (
        
        <div className={`pizza ${className}`}>
            <div className="pizza-info">
                <img src={pizza.image} alt={pizza.name} />
                <div>
                    <h2>{pizza.name}</h2>
                    <p>{pizza.description}</p>
                </div>
            </div>
            
            {isHalfnHalf && (
                <div className="pizza-halves">
                    <div>
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
                    <label htmlFor={`size-${pizza.id}`}>Size:</label>
                    <select
                        id={`size-${pizza.id}`}
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                    >
                        <option value="">Select a size</option>
                        {pizza.sizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

        </div>
    );
}

export default Pizza;