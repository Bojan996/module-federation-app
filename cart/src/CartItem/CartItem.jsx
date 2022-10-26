import React from "react";
import "./CartItem.css";

const CartItem = ({
  id,
  image,
  name,
  price,
  amount,
  onAdd,
  onRemove,
}) => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-description">
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{price} din</p>
        <span>Quantity: {amount}</span>
      </div>
      <div className="cart-item-actions">
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
