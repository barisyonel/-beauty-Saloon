import React from 'react';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <h1>İletişim</h1>
            <div className="contact-info">
                <p>
                    <strong>Adres:</strong> Yeşilırmak, Gaziosmanpaşa Blv. Niksar Yolu Kavşağı, Bektaşoğlu İş Merkezi Kat: 4
                    Tokat Merkez, 60030 Tokat Merkez/Tokat
                </p>
                <p>
                    <strong>Telefon:</strong> +90 356 502 49 83
                </p>
                <p>
                    <strong>Email:</strong> info@ebrukarnak.com
                </p>
            </div>
            <h2 className='ulas'>Bize Ulaşın</h2>
            <form className="contact-form">
                <input type="text" placeholder="Adınız" />
                <input type="email" placeholder="Email Adresiniz" />
                <textarea placeholder="Mesajınız"></textarea>
                <button type="submit">Gönder</button>
            </form>
        </div>
    );
}

export default Contact;
