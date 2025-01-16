import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HomeSlider from '../components/HomeSlider';
import '../styles/Home.css';

function Home() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const faqs = [
        {
            question: 'Cilt bakım seansları ne kadar sürer?',
            answer: 'Cilt bakım seanslarımız genellikle 60 dakika sürmektedir.',
        },
        {
            question: 'Lazer epilasyon kalıcı mıdır?',
            answer: 'Lazer epilasyon genellikle kalıcı sonuçlar verir, ancak kişisel faktörlere bağlı olarak farklılık gösterebilir.',
        },
        {
            question: 'Kaş şekillendirme sonrası bakım önerileriniz nelerdir?',
            answer: 'Kaş şekillendirme sonrası hassasiyeti azaltmak için bölgeye nemlendirici uygulayabilirsiniz.',
        },
    ];

    return (
        <motion.div
            className="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Slider */}
            <HomeSlider />

            {/* SSS Bölümü */}
            <section className="faq-section">
                <h2>Sıkça Sorulan Sorular</h2>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
                            onClick={() => toggleQuestion(index)}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="faq-question">{faq.question}</h3>
                            {activeQuestion === index && <p className="faq-answer">{faq.answer}</p>}
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}

export default Home;
