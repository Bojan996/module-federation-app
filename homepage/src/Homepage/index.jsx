import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../products";
import { addToCart } from "cart/cart";
import "./index.css";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="homepage-container">
      {products.map((product, index) => {
        return (
          <div key={index} className="product-container">
            <h1>{product.name}</h1>
            <h3>{product.description}</h3>
            <Link to={"/product/" + product.id}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-adding-container">
              <p>Price: {product.price}</p>
              <button onClick={() => addToCart(product.id)}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
