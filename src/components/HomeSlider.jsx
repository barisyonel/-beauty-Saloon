import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/HomeSlider.css';

function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const slides = [
        {
            id: 1,
            image: '/src/assets/images/eyebrows.jpg',
            title: 'Güzellik ve Estetikte Uzman Hizmet',
        },
        {
            id: 2,
            image: '/src/assets/images/hair-care.jpg',
            title: 'Sağlıklı ve Parlak Bir Cilt İçin',
        },
        {
            id: 3,
            image: '/src/assets/images/skin-care.jpg',
            title: 'Profesyonel Ekiple Kusursuz Sonuçlar',
        },
    ];

    return (
        <div className="home-slider">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="slide">
                        <img src={slide.image} alt={slide.title} />
                        <div className="slide-title">{slide.title}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HomeSlider;
