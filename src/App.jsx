import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Homepage from './homepage';
import ProductsPage from './productspg';
import ContactPage from './contact';
import PerformancePage from './performance';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/productspg" element={<ProductsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/performance" element={<PerformancePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

