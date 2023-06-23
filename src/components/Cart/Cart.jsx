import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { useSelector,useDispatch } from 'react-redux';
import { onEmptyCart} from '../../redux/reducers/cart';

const Cart = () => {
  const cart = useSelector((state)=>state.cart)
 const totalItems = cart.totalItem
const subtotal =cart.subtotal
const dispatch = useDispatch()
  const handleEmptyCart = () => dispatch(onEmptyCart());
  const renderEmptyCart = () => ( 
    <div className="link" >You have no items in your shopping cart,
      <Link to="/">start adding some</Link>!
    </div>
  );
  const renderCart = () => (
    <>
      <div >
        {cart.items.map((Item) => (
          <div  key={Item[0].id}>
            <CartItem item={Item}  />
          </div>
        ))} 
      </div>
      <div className="cardDetails">
        <h4 >Subtotal: {subtotal}</h4>
        <h4 >Total Items: {totalItems}</h4>
        <div>
          <button className="btn btn-success"  type="button"  onClick={handleEmptyCart}>Empty cart</button>
          <Link to="/checkout">
          <button className="btn btn-success" style={{margin : "10px"}} >Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <div className="toolbar" />
      <div className="title" style={{justifyContent : "center", fontWeight : "bold",fontSize : "xx-large" , color : "blue"}} >Your Shopping Cart</div>
      { !totalItems ? renderEmptyCart() : renderCart() }
    </div>
  );
};

export default Cart;