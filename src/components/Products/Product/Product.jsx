import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { handleAddToCart, handleSubtotal,handleTotalItem } from '../../../redux/reducers/cart';
const Product = ({ product }) => {
  const list = useSelector((state) => state.list)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const handleCart = async (productId) => {
    const item = await list.filter(itemdata => itemdata.id === productId)
     dispatch(handleAddToCart(item))
  };

  return (
    <div className="root">
      <section className="cardContent">
        <h2>{product.name}</h2><br />
        <img src={require("/" + product.imageUrl)} alt="image" /><br />
        Rs {product.price}<br />
        {product.description}<br />
      </section>
      <div className="cardActions">
        <i aria-label="Add to Cart" onClick={() => handleCart(product.id)}>
          <AiOutlineShoppingCart />
        </i>
      </div>
    </div>
  );
};

export default Product;

