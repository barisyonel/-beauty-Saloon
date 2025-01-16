import React from 'react';
import '../styles/Gallery.css';

function Gallery() {
    const images = [
        '/src/assets/images/eyebrows.jpg',
        '/src/assets/images/hair-care.jpg',
        '/src/assets/images/skin-care.jpg',
        '/src/assets/images/eyebrows.jpg',
        '/src/assets/images/hair-care.jpg',
        '/src/assets/images/lazer.jpg',
    ];

    return (
        <div className="gallery">
            <h1>Galeri</h1>
            <p>Ebru Karnak Güzellik Salonu'ndan kareler</p>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
