import React from 'react';
import Product from './Product/Product';
 import   './styles.css';

const Products = ({ products, onAddToCart }) => {
  if (!products.length) return <p>Loading...</p>;
  return (
    <main className="content">
      <div className="toolbar" />
      
        {products.map((product) => (
            <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
    </main>
  );
};

export default Products;

