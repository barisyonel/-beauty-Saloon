import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Services.css';

function Services() {
    const services = [
        {
            id: 1,
            title: 'Cilt Bakımı',
            description: 'Profesyonel cilt bakımı ile doğal güzelliğinizi ortaya çıkarın.',
            image: '/src/assets/images/skin-care.jpg',
        },
        {
            id: 2,
            title: 'Kaş Yapımı',
            description: 'İdeal kaş şeklinizi profesyonel yöntemlerle oluşturuyoruz.',
            image: '/src/assets/images/eyebrows.jpg',
        },
        {
            id: 3,
            title: 'Saç Bakımı',
            description: 'Saçlarınız için özel bakım ve yenileyici tedaviler.',
            image: '/src/assets/images/hair-care.jpg',
        },{
            id: 4,
            title: 'Cilt Bakımı',
            description: 'Profesyonel cilt bakımı ile doğal güzelliğinizi ortaya çıkarın.',
            image: '/src/assets/images/skin-care.jpg',
        },
        {
            id: 5,
            title: 'Kaş Yapımı',
            description: 'İdeal kaş şeklinizi profesyonel yöntemlerle oluşturuyoruz.',
            image: '/src/assets/images/eyebrows.jpg',
        },
        {
            id: 6,
            title: 'Saç Bakımı',
            description: 'Saçlarınız için özel bakım ve yenileyici tedaviler.',
            image: '/src/assets/images/hair-care.jpg',
        }
    ];

    return (
        <div className="services">
            <h1>Hizmetlerimiz</h1>
            <div className="services-container">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        className="service-card"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: service.id * 0.2 }}
                    >
                        <img src={service.image} alt={service.title} className="service-image" />
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Services;
