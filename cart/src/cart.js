import React from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8080";

export const cart = new BehaviorSubject(null);

export const getCart = () =>
  fetch(`${API_SERVER}/cart`)
    .then((res) => res.json())
    .then((res) => {
      cart.next(res.cart);
      return res.cart;
    });

export const addToCart = (id) =>
  fetch(`${API_SERVER}/add-to-cart`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then(() => {
      getCart();
    });

export const clearCart = (id) =>
  fetch(`${API_SERVER}/delete-from-cart`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then(() => {
      getCart();
    });
