import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
const Cart = ({ cart,totalItems, onUpdateCartQty, onRemoveFromCart, onEmptyCart,subtotal }) => {
  const handleEmptyCart = () => onEmptyCart();
  const renderEmptyCart = () => ( 
    <div className="link" >You have no items in your shopping cart,
      <Link to="/">start adding some</Link>!
    </div>
  );
  const renderCart = () => (
    <>
      <div >
        {cart.map((Item) => (
          <div  key={Item[0].id}>
            <CartItem item={Item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </div>
        ))} 
      </div>
      <div className="cardDetails">
        <h4 >Subtotal: {subtotal}</h4>
        <h4 >Total Items: {totalItems}</h4>
        <div>
          <button className="emptyButton"  type="button"  onClick={handleEmptyCart}>Empty cart</button>
          <Link to="/checkout">
          <button className="checkoutButton" >Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <div className="toolbar" />
      <div className="title" >Your Shopping Cart</div>
      { !totalItems ? renderEmptyCart() : renderCart() }
    </div>
  );
};

export default Cart;