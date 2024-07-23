import React from 'react';
import './styles.css';
import scrollToTop from './scrollUtils'; 
import Facebook from './videos-images /facebook.svg'
import Instagram from './videos-images /instagram.svg'
import TikTok from './videos-images /tiktok.svg'
import YouTube from './videos-images /youtube.svg'
import Logo from './videos-images /DClogo2.png'

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
      <img src={Logo} alt="Logo"  style={{ width: '25%' }} />
      </div>
      <div className="social-icons">
        <a target="_blank" href="https://www.facebook.com/marketplace/107812615908638/search?query=c8%20zo6" className="social-icon"><img src={Facebook} alt="Facebook" /></a>
        <a target="_blank" href="https://www.instagram.com/" className="social-icon"><img src={Instagram} alt="Instagram" /></a>
        <a target="_blank" href="https://www.tiktok.com/explore?lang=en" className="social-icon"><img src={TikTok} alt="Tiktok" /></a>
        <a target="_blank" href="https://www.youtube.com/" className="social-icon"><img src={YouTube} alt="Youtube" /></a>
      </div>
      <div className="copyright">Created in 2024</div>
      <button onClick={scrollToTop} title="Back to Top">Back to Top</button>
    </footer>
  );
}

export default Footer;
