import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductView.css";
import { getProductById } from "homepage/products";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return null;

  return (
      <div className="product-view-container">
        <img src={product.image} alt={product.name} />
        <div className="product-description-container">
          <h3>{product.name}</h3>
          <h5>{product.description}</h5>
          <p className="product-price">Price: {product.price}</p>
        </div>
      </div>
  );
};

export default ProductView;
