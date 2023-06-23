import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Review = () => {
  const subtotal = useSelector((state)=>state.cart.subtotal)
  const totalItems = useSelector((state)=>state.cart.totalItem)
  return (<>
    <div >Order summary</div>
    <div className="cardDetails">
        <h4 >Total Price: {subtotal}</h4>
        <h4 >Total Items: {totalItems}</h4>
        <div>
          <Link to="/cart">
          <button className="btn btn-success" style={{ margin : "0 20px"}}>Back</button>
          </Link>
          <Link to ="/success">
          <button className="btn btn-success" >Confirm</button>
          </Link>
        </div>
      </div>
     </>)
};

export default Review;
