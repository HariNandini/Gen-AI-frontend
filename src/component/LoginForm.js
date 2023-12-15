// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate=useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    otp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add code to send login data to the server for authentication
    console.log('Login data:', loginData);
    // Assuming authentication is successful, now generate and send OTP
    const generatedOTP = Math.floor(1000 + Math.random() * 9000);
    // TODO: Send the OTP to the user's registered email or phone number

    // For simplicity, let's log the generated OTP to the console
    console.log('Generated OTP:', generatedOTP);
  };

  const handleOTPVerification = (e) => {
    e.preventDefault();
    // TODO: Add code to verify OTP on the server
    console.log('OTP Verification data:', loginData);
    // Reset the form after OTP verification
    setLoginData({
      username: '',
      password: '',
      otp: '',
    });
  };

  return (
    <div>
        <h1>LOGIN FORM</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form><br></br>
        <b><label>Forgot password? </label></b>
      <button onClick={() => navigate("/ForgotPassword")}>
      Reset here.
    </button><br/>
        <b><label>Change password? </label></b>
      <button onClick={() => navigate("/ChangePassword")}>
      Change here.
    </button><br/><br/>

      <form onSubmit={handleOTPVerification}>
        <label>
          OTP:
          <input
            type="text"
            name="otp"
            value={loginData.otp}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default LoginForm;
