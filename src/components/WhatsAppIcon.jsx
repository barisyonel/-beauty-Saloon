import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppIcon.css'

function WhatsAppIcon() {
    return (
        <a
            href="https://wa.me/905XXXXXXX" // Buraya WhatsApp numaranızı ekleyin
            className="whatsapp-icon"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp />
        </a>
    );
}

export default WhatsAppIcon;
