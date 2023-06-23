import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onEmptyCart } from '../../../redux/reducers/cart';
const Success = () => {
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(onEmptyCart())
},[])
  return <>
    <div className="link" >
      We have received your order.
      <Link to="/">shop more</Link>!
    </div>

  </>
};

export default Success;