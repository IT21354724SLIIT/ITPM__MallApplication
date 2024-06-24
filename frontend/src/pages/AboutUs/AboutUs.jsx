import React from 'react';
import './AboutUs.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <h2 className='text-center'>About Us</h2>
      <div className="about-us-container">
        <p>Skyline Mall, established in 2009, has been a cornerstone of our city's retail landscape for over two decades. Originally envisioned as a hub for urban living and shopping, the mall quickly became a beloved destination for locals and tourists alike. Over the years, Skyline Mall has evolved and expanded, keeping pace with the changing retail landscape and consumer preferences.

        In 2021, a major renovation and expansion project transformed Skyline Mall into the modern, spacious, and vibrant shopping center it is today. The renovation included updates to the mall's infrastructure, the addition of new stores and dining options, and the incorporation of sustainable design elements.

        Today, Skyline Mall continues to thrive as a premier shopping destination, offering a unique blend of upscale retailers, casual dining spots, and entertainment options. Its rich history and commitment to excellence make it a beloved landmark in our city's skyline.
        </p>
        <p>Skyline Mall, nestled in the heart of our vibrant city, is a premier shopping destination that offers a blend of luxury and convenience. Boasting a diverse range of stores and boutiques, from high-end fashion brands to local artisan shops, Skyline Mall caters to every shopper's taste. With its modern architecture and spacious layout, the mall provides a welcoming and enjoyable shopping experience. Whether you're looking for the latest fashion trends, exquisite dining options, or simply a place to unwind, Skyline Mall has something for everyone. Explore, shop, and indulge in the elegance of Skyline Mall.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
