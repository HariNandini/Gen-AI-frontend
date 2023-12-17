// RegistrationForm.js
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import useUserService from '../service/UserService';
import axios from 'axios';
 
const RegistrationForm = () => {
  const navigate = useNavigate();
  // const {addUser} = useUserService();
//   const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleRegister = async () => {
//         try {
//             const response = await fetch('http://localhost:1000/api/users/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (response.ok) {
//                 console.log('Registration successful');
//             } else {
//                 console.error('Registration failed');
//             }
//         } catch (error) {
//             console.error('Error during registration:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Registration</h2>
//             <form>
//                 <label>Username:</label>
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                 <br />
//                 <label>Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <br />
//                 <button type="button" onClick={handleRegister}>
//                     Register
//                 </button>
//             </form>
//         </div>
//     );
// };
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add code to send registration data to the server
    console.log('Registration data:', formData);
    // Reset form after submission
    // setFormData({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   password: '',
    // });
    
    axios.post('http://localhost:8282/api/users/register', formData)
            .then((response) => {
              // Handle success
              console.log("inside");
              
            })
            .catch((error) => {
              // Handle error
              console.log(error);
            });
            navigate("/");
       
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h1>REGISTRATION FORM</h1>
      <label>
        User Name:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Register</button>
      
    <h4>Already have an account?</h4>
    <button onClick={() => navigate("/Login")}>
      Login
    </button>
    </form>
  );
};

export default RegistrationForm;
