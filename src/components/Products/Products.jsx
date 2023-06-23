import React from 'react';
import Product from './Product/Product';
 import   './styles.css';
import { useSelector } from 'react-redux';
const Products = () => {
  const products = useSelector((state)=> state.list)
  if (!products.length) return <p>Loading...</p>;
  return (
    <main className="content">
      <div className="toolbar" />
        {products.map((product) => (
            <Product key={product.id} product={product}  />
        ))}
    </main>
  );
};

export default Products;

