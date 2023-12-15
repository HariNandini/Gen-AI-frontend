// ProductCatalog.js
import React from 'react';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
// import img3 from '../img/img3.jpg'

const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      image: img1,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      image: img2,
    },
    // {
    //     id: 3,
    //     name: 'Product 3',
    //     description: 'Description for Product 3',
    //     price: 89.99,
    //     image: img3,
    //   },
    // Add more products as needed
  ];

const ProductCatalog = () => {
  return (
    <div>
      <h2>Product Catalog</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} 
                    style={{height: "120px"}}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add more product details as needed */}
            <button>Add to Cart</button><br/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
