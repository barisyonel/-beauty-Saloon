import React from 'react';
import '../styles/Blog.css';

function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: 'Cilt Bakımı İpuçları',
            description: 'Cildinizi sağlıklı ve parlak tutmanın yollarını öğrenin.',
            image: '/src/assets/images/skin-care.jpg',
        },
        {
            id: 2,
            title: 'Lazer Epilasyon Hakkında',
            description: 'Lazer epilasyonun faydaları ve süreç hakkında detaylı bilgiler.',
            image: '/src/assets/images/lazer.jpg',
        },
        {
            id: 3,
            title: 'Kaş Şekillendirme Trendleri',
            description: 'Son moda kaş şekillendirme yöntemlerini keşfedin.',
            image: '/src/assets/images/eyebrows.jpg',
        },
    ];

    return (
        <div className="blog">
            <h1>Blog</h1>
            <p>Güzellik ipuçları, trendler ve daha fazlasını keşfedin</p>
            <div className="blog-container">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <h2 className="blog-title">{post.title}</h2>
                        <p className="blog-description">{post.description}</p>
                        <button className="blog-button">Devamını Oku</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
