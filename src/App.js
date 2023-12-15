// App.js
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import RegistrationForm from './component/RegistrationForm.js'
import LoginForm from './component/LoginForm.js';
import Home from './component/Home.js';
import ChangePassword from './component/ChangePasswordForm.js';
import ForgotPassword from './component/ForgotPasswordForm.js';
import ProductCatalog from './component/ProductCatalog.js';
import Checkout from './component/Checkout.js';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/"
            element={<Home />}
          />
          <Route exact path="/Register"
            element={<RegistrationForm />}
          />
          <Route exact path="/Login"
            element={<LoginForm />}
          />
          <Route exact path="/ChangePassword"
            element={<ChangePassword />}
          />
          <Route exact path="/ForgotPassword"
            element={<ForgotPassword />}
          />
           <Route exact path="/ProductCatalog"
            element={<ProductCatalog />}
          />
          <Route exact path="/Checkout"
            element={<Checkout />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
