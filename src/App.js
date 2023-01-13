import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import  Products  from './components/Products/Products';
// import  Navbar  from './components/Navbar/Navbar';
// import Cart from "./components/Cart/Cart"
// import Checkout from './components/CheckoutForm/Checkout/Checkout';
import { Navbar, Products, Cart, Checkout,Success } from './components';

const App = () => {
  const list = [
    {
      id: 1, name: "Keyboard", price: 500, imageUrl: "assets/keyboard.jpg",
      description: "this is latest keyboard", quantity: 1, totalPrice: 500
    },
    {
      id: 2, name: "Mouse", price: 300, imageUrl: "assets/mouse.jpg",
      description: "this is latest Mouse", quantity: 1, totalPrice: 300
    },
    {
      id: 3, name: "Jug", price: 200, imageUrl: "assets/jug.jpg",
      description: "this is latest jug", quantity: 1, totalPrice: 200
    },
    {
      id: 4, name: "Phone", price: 12000, imageUrl: "assets/phone.png",
      description: "this is latest Phone", quantity: 1, totalPrice: 12000
    },
    {
      id: 5, name: "Laptop", price: 25000, imageUrl: "assets/laptop.png",
      description: "this is latest laptop", quantity: 1, totalPrice: 25000
    },
    {
      id: 6, name: "Printer", price: 18000, imageUrl: "assets/printer.jpg",
      description: "this is latest printer", quantity: 1, totalPrice: 18000
    },
    {
      id: 7, name: "Toycar", price: 500, imageUrl: "assets/toycar.jpg",
      description: "this is latest Toycar", quantity: 1, totalPrice: 500
    },
    {
      id: 8, name: "Washing Machine", price: 13000, imageUrl: "assets/machine.jpg",
      description: "this is latest Washing Machine", quantity: 1, totalPrice: 13000
    }
  ]
  const cartItem = []
  const [products, setProducts] = useState(list);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [subtotal, setSubtotal] = useState(0)
  const [totalItem, settotalItem] = useState(0)

  const handleAddToCart = async (productId) => {
    const item = list.filter(itemdata => itemdata.id === productId)
    setCart((cart) => [...cart, item])
  };
  useEffect(() => {
    if (cart.length) {
      const total = cart.map((item) => item[0].price).reduce((accum, value) => accum + value)
      setSubtotal(total)
      const totalItems = cart.map((item) => item[0].quantity).reduce((accum, value) => accum + value)
      settotalItem(totalItems)
    }
  }, [cart])
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const items = cart.map((lineItem => {
      if (lineItem[0].id == lineItemId && quantity >= 0) {
        lineItem[0].quantity = quantity
        lineItem[0].totalPrice = quantity * lineItem[0].price
      }
      return lineItem
    }))
    setCart(items)
    const total = cart.map((item) => item[0].price).reduce((accum, value) => accum + value)
    setSubtotal(total)
    const totalItems = cart.map((item) => item[0].quantity).reduce((accum, value) => accum + value)
    settotalItem(totalItems)
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const items = cart.filter(itemdata => itemdata[0].id != lineItemId)
    setCart(items)
    console.log(cart)
  };

  const handleEmptyCart = async () => {
    setCart([]);
    setSubtotal(0)
    settotalItem(0)
  };
 const onCaptureCheckout =(data)=>{
  setOrder(data)
  console.log(order)
 }
  return (
    <Router>
      <Navbar totalItems={cart.length} />
      <Routes>
        <Route path='/' element={<Products products={products} onAddToCart={handleAddToCart} />} />
        <Route path='/cart' element={<Cart cart={cart} totalItems={totalItem} subtotal={subtotal} onUpdateCartQty={handleUpdateCartQty}
          onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
        <Route path='/checkout' element={<Checkout cart={cart} totalItems={totalItem} subtotal={subtotal} onCaptureCheckout={onCaptureCheckout} order={order} />} />
      <Route path='success' element={<Success/>}/>
      </Routes>
    </Router>
  );
};

export default App;

