import React from 'react';
import { Link } from 'react-router-dom';
const Review = ({ subtotal,totalItems }) => (
  <>
    <div >Order summary</div>
    <div className="cardDetails">
        <h4 >Total Price: {subtotal}</h4>
        <h4 >Total Items: {totalItems}</h4>
        <div>
          <Link to="/cart">
          <button className="checkoutButton" >Back</button>
          </Link>
          <Link to ="/success">
          <button className="emptyButton" >Confirm Order</button>
          </Link>
        </div>
      </div>
     </>
);

export default Review;
