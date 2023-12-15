// ChangePasswordForm.js
import React, { useState } from 'react';

const ChangePasswordForm = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add code to send password change data to the server for validation
    console.log('Password change data:', passwordData);

    // Assuming password change is successful, reset the form
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Current Password:
        <input
          type="password"
          name="currentPassword"
          value={passwordData.currentPassword}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        New Password:
        <input
          type="password"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Confirm New Password:
        <input
          type="password"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Change Password</button>
    </form>
  );
};

export default ChangePasswordForm;
