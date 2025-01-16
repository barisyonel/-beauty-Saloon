import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="about-header">
                <h1>Hakkımızda</h1>
                <p>Ebru Karnak Güzellik Salonu'na hoş geldiniz!</p>
            </div>
            <div className="about-content">
                <p>
                    Güzellik ve bakım alanında yılların tecrübesiyle hizmet veriyoruz. Misyonumuz, 
                    müşterilerimize en iyi hizmeti sunarak kendilerini daha iyi hissetmelerini sağlamak.
                </p>
                <p>
                    Uzman kadromuz ve son teknoloji ekipmanlarımızla, cilt bakımı, saç bakımı, lazer epilasyon 
                    gibi birçok hizmeti özenle sunuyoruz. Amacımız, her müşterimizin buradan mutlu ayrılması!
                </p>
            </div>
        </div>
    );
}

export default About;
