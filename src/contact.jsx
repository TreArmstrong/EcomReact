import React, { useState } from 'react';
import './contact.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        product: 'Not Listed',
        comment: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    product: 'Not Listed',
                    comment: ''
                });
            } else {
                alert('Error submitting the form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form id="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="product">Product:</label>
                <select id="product" name="product" value={formData.product} onChange={handleChange}>
                    <option value="Not Listed">Not Listed</option>
                    <option value="C8 Z06">C8 ZO6</option>
                    <option value="C8 2LT">C8 2LT</option>
                    {/* Add other product options here */}

                </select>

                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange}></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContactPage;
