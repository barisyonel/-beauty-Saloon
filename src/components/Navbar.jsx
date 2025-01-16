import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (e) => {
        // Menü dışında bir yere tıklanırsa menüyü kapat
        if (isMenuOpen && !e.target.closest('.navbar')) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        // Tıklama olayını ekle
        document.addEventListener('click', closeMenu);

        // Component unmount olduğunda tıklama olayını temizle
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/src/assets/images/logo.jpg" alt="Logo" className="navbar-logo" />
                <span className="navbar-title">Ebru Karnak Güzellik Merkezi</span>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Anasayfa</Link></li>
                <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Hakkımızda</Link></li>
                <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Hizmetlerimiz</Link></li>
                <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
                <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>İletişim</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
