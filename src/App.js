import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Products, Cart, Checkout, Success } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { handleSubtotal,handleTotalItem } from './redux/reducers/cart';
const App = () => {
  const dispatch =useDispatch()
  const cart = useSelector((state) => state.cart)
  useEffect(()=>{
    if (cart.items.length) {
      const totalItem =  cart.items.map((item) => item[0].quantity).reduce((accum, value) => accum + value)
      dispatch(handleTotalItem(totalItem))
      const total =  cart.items.map((item) => item[0].price).reduce((accum, value) => accum + value)
      dispatch(handleSubtotal(total))
       }
   },[cart.items])
  return (
    <Router>
      <Navbar totalItems={cart.length} />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout  />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;