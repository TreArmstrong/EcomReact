import React, { useState, useEffect } from 'react';
import './productpage.css'; // Import the CSS file

const ProductsPage = () => {
    const [originalProducts, setOriginalProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products'); // API endpoint to fetch product data from the server
                if (response.ok) {
                    const data = await response.json();
                    setOriginalProducts(data); // Set original products data
                    setFilteredProducts(data); // Set initial filtered products data
                } else {
                    console.error('Failed to fetch products data');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const renderProductCard = (product) => {
        return (
            <div className="product-card" key={product.id}>
                <img src={product.photo} alt={product.name} />
                <h3>{product.name}</h3>
                <p><span>Price:</span> ${product.price}</p>
                <p>{product.description}</p>
                <a href="contact.html" className="contact-btn">Contact Us</a>
            </div>
        );
    };

    const displayProducts = () => {
        const priceRangeFilter = document.getElementById('price-range').value;
        const modelFilter = document.getElementById('model-filter').value;

        const filtered = originalProducts.filter(product => {
            const [minPrice, maxPrice] = priceRangeFilter.split('-').map(Number);
            const price = Number(product.price.replace(/,/g, ''));
            const isPriceInRange = price >= minPrice && price <= maxPrice;
            const isModelMatch = modelFilter === 'All' || product.model === modelFilter;
            return isPriceInRange && isModelMatch;
        });

        setFilteredProducts(filtered);
    };

    return (
        <div>
            <div className="filters">
                <label htmlFor="price-range">Price Range:</label>
                <select id="price-range" onChange={displayProducts}>
                    <option value="0-1000000">ALL</option>
                    <option value="0-50000">Up to $50,000</option>
                    <option value="50001-100000">$50,001 - $100,000</option>
                    <option value="100001-150000">$100,001 - $150,000</option>
                </select>
                <label htmlFor="model-filter">Model:</label>
                <select id="model-filter" onChange={displayProducts}>
                    <option value="All">All Models</option>
                    <option value="Chevy">Chevy</option>
                    <option value="Dodge">Dodge</option>
                    <option value="Cadillac">Cadillac</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                </select>
            </div>
            <div className="product-grid">
                {filteredProducts.map(product => renderProductCard(product))}
            </div>
        </div>
    );
};

export default ProductsPage;
