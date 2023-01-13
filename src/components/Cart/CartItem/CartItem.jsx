import React from 'react';
import "./styles.css"
const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
  return (
    <div className="cart-item">
      <div className="cardContents">
        <div >{item[0].name}</div>
        <div >{item[0].totalPrice}</div>
      </div>
      <div className={"cardAction"}>
        <div className={"buttons"}>
          <button className='buttons' type="button"  onClick={() => handleUpdateCartQty(item[0].id, item[0].quantity - 1)}>-</button>
          <div>&nbsp;{item[0].quantity}&nbsp;</div>
          <button className='buttons' type="button" onClick={() => handleUpdateCartQty(item[0].id, item[0].quantity + 1)}>+</button>
        </div>
        <button className='button' type="button" onClick={() => handleRemoveFromCart(item[0].id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
