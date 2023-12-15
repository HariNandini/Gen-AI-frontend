// Checkout.js
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Add more user details as needed
  };
  
  const cart = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      // Add more product details as needed
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      // Add more product details as needed
    },
    // Add more cart items as needed
  ];



const Checkout = () => {
  const navigate=useNavigate();
    const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePayment = async () => {
    // TODO: Add code to integrate with a payment gateway (e.g., Stripe, PayPal)
    try {
      // Send payment information to the server and process the payment
      window.alert('Payment successful!');
      navigate('/');
      // Reset the form after successful payment
      setShippingInfo({
        fullName: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
      });
    } catch (error) {
      console.error('Payment failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Selected Products:</h3>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
      <form>
        <h3>Shipping Information:</h3>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={shippingInfo.fullName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Zip Code:
          <input
            type="text"
            name="zipCode"
            value={shippingInfo.zipCode}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={shippingInfo.country}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handlePayment}>
          Make Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;
