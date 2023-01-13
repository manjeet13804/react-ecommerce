import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import "./styles.css"
import logo from '../../assets/commerce.png';

const PrimarySearchAppBar = ({ totalItems }) => {
  const location = useLocation();
  return (
    <>
      <header  >
        <div className="appBar">
          <Link to="/">
            <div className="title" >
              <img src={logo} alt="ecommerce" className="image" /> E-Commerce Site
            </div>
          </Link>
          {location.pathname === '/' && (
            <span className="button">
              <Link to="/cart">
                <span aria-label="Show cart items" >
                  <AiOutlineShoppingCart className='cart' />
                  <i className="fa badge" >
                    {totalItems} </i>
                </span>
              </Link>
            </span>
          )}
        </div>
      </header>
    </>
  );
};

export default PrimarySearchAppBar;
