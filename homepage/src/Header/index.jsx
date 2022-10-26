import React from "react";

import "./index.css";

import MiniCart from "cart/MiniCart";

export default ({ user }) => {
  return (
    <div className="header-container">
      <h3>Welcome to the best header</h3>
      <MiniCart />
    </div>
  );
};
