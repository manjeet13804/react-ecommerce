import React, { useState } from 'react';
import AddressForm from '../AddressForm';
import Review from '../Review';
const Checkout = ({ cart, onCaptureCheckout , subtotal, totalItems}) => {
  const [step,setStep]=useState(false)
  const test = (data) => {
    onCaptureCheckout(data)
    setStep(true)
  };
  return <>
   { !step &&<AddressForm test={test} />}
   { step &&<Review subtotal={subtotal} totalItems={totalItems} />}
  </>
};

export default Checkout;
