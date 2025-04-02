// import React from "react";
// import styled from "styled-components";

// const HeroSection = styled.section`
//   width: 100%;
//   text-align: center;
//   background: #f8f1e4; /* Warm and cozy background */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
// `;

// const HeroImage = styled.img`
//   width: 100%;
//   height: auto; /* Adjusts height dynamically */
//   max-height: 90vh; /* Ensures it fits within the viewport */
//   object-fit: contain; /* Ensures full image visibility */
//   box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
//   border-radius: 10px;
// `;

// const Hero = () => {
//   return (
//     <HeroSection>
//       <HeroImage src="/banner.png" alt="Beautiful Home Decor Banner" />
//     </HeroSection>
//   );
// };

// export default Hero;




import React from 'react';
import CategorySection from './CategorySection';
import TrendingProducts from './TrendingProducts';

const Hero = () => {
  return (
    <>
      {/* <section
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://public.readdy.ai/ai/img_res/3dc64b554b80f99d5b35766cb7e2a520.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white relative z-10">
            <h2 className="text-4xl font-bold mb-4">Transform Your Space With Style</h2>
            <p className="text-lg mb-8">
              Discover our Spring 2025 collection featuring handcrafted pieces that bring warmth and elegance to your home.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap">
                Shop Now
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 font-medium !rounded-button whitespace-nowrap">
                Explore Collections
              </button>
            </div>
          </div>
        </div>
      </section> */}


      <section
        className="relative w-full h-[600px] sm:h-[500px] xs:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://public.readdy.ai/ai/img_res/3dc64b554b80f99d5b35766cb7e2a520.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
        <div className="container mx-auto px-6 sm:px-4 h-full flex items-center">
          <div className="max-w-xl text-white relative z-10 text-center sm:text-left">
            <h2 className="text-4xl sm:text-3xl xs:text-2xl font-bold mb-4">
              Transform Your Space With Style
            </h2>
            <p className="text-lg sm:text-base xs:text-sm mb-6 sm:mb-4">
              Discover our Spring 2025 collection featuring handcrafted pieces that bring warmth and elegance to your home.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap">
                Shop Now
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 font-medium !rounded-button whitespace-nowrap">
                Explore Collections
              </button>
            </div>
          </div>
        </div>
      </section>


      <CategorySection />
      <TrendingProducts />
    </>
  );
};

export default Hero;
