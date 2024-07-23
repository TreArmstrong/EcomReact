import React, { useState, useEffect } from 'react';
import './productpage.css';

const PerformancePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/performance'); // Replace with the actual API endpoint for fetching products from MySQL
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    console.error('Failed to fetch products data');
                }
            } catch (error) {
                console.error('Error fetching products data:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Performance Page</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.photo} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p><span>Price:</span> ${product.price}</p>
                        <p>{product.description}</p>
                        <a href="contact.html" className="contact-btn">Contact Us</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformancePage;
