import React, { useEffect, useState } from "react";

import { getCart, addToCart, clearCart, cart } from "../cart";
import "./MiniCart.css";

import CartItem from "../CartItem/CartItem";

const MiniCart = () => {
  const [items, setItems] = useState();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    return getCart().then(() =>
      cart.subscribe((cartItems) => {
        setItems(cartItems);
      })
    );
  }, []);

  const addToCartHandler = (id) => {
    addToCart(id);
  };

  const deleteCartItemHandler = (id) => {
    clearCart(id);
  };

  if (!items) return null;

  return (
    <div className="mini-cart-container">
      <button
        className="mini-cart-button"
        onClick={() => setShowCart(!showCart)}
      >
        Cart
      </button>
      {showCart && (
        <div className="cart-items-container">
          {items.length ? (
            items.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  {...item}
                  onAdd={addToCartHandler}
                  onRemove={deleteCartItemHandler}
                />
              );
            })
          ) : (
            <h1 style={{color: 'black'}}>No items in cart</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniCart;
