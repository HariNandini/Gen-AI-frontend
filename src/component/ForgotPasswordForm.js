// ForgotPasswordForm.js
import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add code to send a password reset email to the server
    console.log('Password reset email sent to:', email);
    // Reset the form after submission
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Send Password Reset Email</button>
    </form>
  );
};

export default ForgotPasswordForm;
