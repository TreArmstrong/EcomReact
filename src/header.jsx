import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './styles.css';
import Logo from './videos-images /DClogo1.png' 

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />

      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productspg">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/performance">Performance</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
