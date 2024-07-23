import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import './styles.css';

function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
          const response = await axios.get('/api/products');
          if (!response.data || typeof response.data !== 'object') {
              throw new Error('Invalid JSON response');
          }
          setProducts(response.data);
      } catch (error) {
          console.error('Error fetching product data:', error);
          // Handle the error or display an appropriate message to the user
      }
  };
  

    fetchProducts();
  }, []);

  return (
    <section className="products">
      <h2>Products</h2>
      <div className="carousel">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.photo} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="description-overlay">
              <p className="full-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;

