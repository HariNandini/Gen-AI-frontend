import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCatalog from "./ProductCatalog";

const Home=()=>{
    const navigate=useNavigate();
    return (<>
            <h1>HOME PAGE</h1>
            <button onClick={() => navigate("/Login")}>Login</button>&nbsp;
            <button onClick={() => navigate("/Register")}>Register</button>
            <button onClick={() => navigate("/Checkout")}>Checkout</button>&nbsp;
            
        <ProductCatalog/>
        </>
    );
}

export default Home;