import React from 'react';
import "./styles.css"
import { useSelector, useDispatch } from 'react-redux';
import { handleSubtotal, onAddCartQty, onRemoveCartQty, onRemoveFromCart } from '../../../redux/reducers/cart';
import { useEffect } from 'react';
const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  var cart = useSelector(state => state.cart)
  const handleUpdateCartQty = async (lineItemId, newQuantity,flag) => {
   if(flag) dispatch(onAddCartQty([lineItemId, newQuantity]))
   if(!flag) dispatch(onRemoveCartQty([lineItemId, newQuantity]))   
  };
  useEffect(()=>{
    const total = cart.items.map((item) => item[0].totalPrice).reduce((accum, value) => accum + value)
 dispatch(handleSubtotal(total))
   },[cart.totalItem])

  const handleRemoveFromCart = async (lineItemId) => {
    const items = await cart.items.filter(itemdata => itemdata[0].id !== lineItemId)
    dispatch(onRemoveFromCart(items));
  }
  return (
    <div className="cart-item">
      <div className="cardContents">
        <div >{item[0].name}</div>
        <div >{item[0].totalPrice}</div>
      </div>
      <div className={"cardAction"}>
        <div className={"buttons"}>
          <button className='btn btn-success' type="button" onClick={() => handleUpdateCartQty(item[0].id, item[0].quantity - 1,false)}>-</button>
          <div>&nbsp;{item[0].quantity}&nbsp;</div>
          <button className='btn btn-success' type="button" onClick={() => handleUpdateCartQty(item[0].id, item[0].quantity + 1,true)}>+</button>
        </div>
        <button className='btn btn-success'style={{display :"flex", justifyContent:"center"}} type="button" onClick={() => handleRemoveFromCart(item[0].id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
