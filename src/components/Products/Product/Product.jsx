import React from 'react';
import './styles.css';
import {AiOutlineShoppingCart} from "react-icons/ai"
const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id);
  return (
    <div className="root">
      <div className="media" />
        <section className="cardContent">
          <h2>{product.name}</h2><br/>
          <img src={require("/"+product.imageUrl)} alt="image" /><br/>
          Rs {product.price}<br/>
          {product.description}<br/>
        </section>
      <div className="cardActions">
        <i aria-label="Add to Cart" onClick={handleAddToCart}>
          <AiOutlineShoppingCart />
        </i>
      </div>
    </div>
  );
};

export default Product;

