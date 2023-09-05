import React from "react";
import { Link } from "react-router-dom";
import './Styles/ProductCard.css';

const ProductCard = ({ product, category }) => {
  console.log(category);
  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <Link to= {`/product/${category}/${product.id}`}>
        <button className="btn3">Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductCard;
