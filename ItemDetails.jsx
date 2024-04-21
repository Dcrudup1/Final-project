// ItemDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { catalogItems } from "./data";
import "./ItemDetails.css";

function ItemDetails() {
  const { id } = useParams();
  const item = catalogItems.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = () => {
    // Perform checkout logic here
    console.log(
      `Checkout for ${quantity} units of ${item.name} with payment method: ${paymentMethod}`
    );
    // You can implement additional logic like updating the cart, processing payment, etc.
  };

  return (
    <div className="item-details-container">
      <div className="item-details">
        <div className="item-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="item-details-info">
          <h2>{item.name}</h2>
          <p className="item-price">Price: {item.price}</p>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="checkout">
        <h3>Checkout</h3>
        <div className="checkout-form">
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;