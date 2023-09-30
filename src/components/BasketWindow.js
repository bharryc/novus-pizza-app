import ReactModal from 'react-modal';
import "./BasketWindow.css";

function BasketWindow({ isOpen, onClose, basket, setBasket }) {
 
  const removeFromBasket = (itemIndex) => {
    const updatedBasket = basket.filter((_, index) => index !== itemIndex);
    setBasket(updatedBasket);
  }

  const total = basket.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Basket"
      ariaHideApp={false}
    >

<div className="basket-header">
        <h4>Big Tony's Big Basket</h4>
      </div>


      <div className="basket-content">
        <h3>Your Basket</h3>
        <ul>
          {basket.map((item, index) => (
            <li key={index}>
              <strong>{item.type === "pizza" ? item.pizza : item.side || item.drink}</strong>
              {item.type === "pizza" && (
                <>
                  {item.half1 && item.half2 && (
                    <>
                      <br />
                      Half 1: {item.half1}
                      <br />
                      Half 2: {item.half2}
                    </>
                  )}
                  <br />
                  Base: {item.base}
                  <br />
                  Size: {item.size}
                </>
              )}
              : ${item.price}
              <button className="remove-button" onClick={() => removeFromBasket(index)}>X</button>
            </li>
          ))}
        </ul>
        <div className="total-price">
          <br/>
          <br/>
          <strong>Total:</strong> ${total.toFixed(2)}
        </div>
        <div className="button-container">
          <button className="close-button" onClick={onClose}>Close</button>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </ReactModal>
  );
}

export default BasketWindow;
