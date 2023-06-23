import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './CustomTextField';
import "./Checkout/styles.css"
const AddressForm = ({ test }) => {
  const methods = useForm();
  return (
    <>
      <div className='shiping'>Shipping address</div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data }))}>
          <section className='form-input'>
            <label >First name</label>
            <FormInput required name="firstName" label="First name" />
            <label>Last name</label>
            <FormInput required name="lastName" label="Last name" />
            <label>Address</label>
            <FormInput required name="address1" label="Address line 1" />
            <label>Email</label>
            <FormInput required name="email" label="Email" />
            <label>City</label>
            <FormInput required name="city" label="City" />
            <label>Pin Code</label>
            <FormInput required name="zip" label="Zip / Postal code" />
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-evenly',  marginLeft: "-80%" }}>
              <Link to="/cart">
                <button className='btn btn-success'>Back</button>
              </Link>
              <button className='btn btn-success' type="submit">Next</button>
            </div>
          </section>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
