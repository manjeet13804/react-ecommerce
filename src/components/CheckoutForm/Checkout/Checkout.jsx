import React, { useState } from 'react';
import AddressForm from '../AddressForm';
import Review from '../Review';
import { useDispatch } from 'react-redux';
import {handleShipping} from '../../../redux/reducers/shipping'
const Checkout = () => {
  const [step, setStep] = useState(false)
  const dispatch =useDispatch();
  const test = (data) => {
    dispatch(handleShipping(data))
    setStep(true)
  };
  
  return <>
    {!step && <AddressForm test={test} />}
    {step && <Review  />}
  </>
};

export default Checkout;
