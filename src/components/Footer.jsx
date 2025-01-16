import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Ebru Karnak Güzellik Merkezi</h3>
        <p>
          Uzun Yıllardır Güzellik Sektöründe Arkamızda Binlerce Memnun Müşteri
          Bırakarak Hizmetlerimize Hız Kesmeden Devam Ediyoruz.
        </p>
      </div>
      <div className="footer-section">
        <h4>Hızlı Linkler</h4>
        <ul>
          <li><a href="/services">Hizmetlerimiz</a></li>
          <li><a href="/aesthetic-services">Estetik Hizmetleri</a></li>
          <li><a href="/contact">İletişim</a></li>
          <li><a href="/about">Hakkımızda</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Sözleşmeler</h4>
        <ul>
          <li><a href="/sales-agreement">Mesafeli Satış Sözleşmesi</a></li>
          <li><a href="/service-agreement">Hizmet Sözleşmesi</a></li>
          <li><a href="/privacy-policy">Gizlilik Sözleşmesi</a></li>
          <li><a href="/terms">Şartlar</a></li>
          <li><a href="/about">Hakkımızda</a></li>
          <li><a href="/contact">İletişim</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
