// import React from "react";
// import styled from "styled-components";

// const HeroSection = styled.section`
//   width: 100%;
//   text-align: center;
//   background: #f4f4f4;
//   padding: 30px 0;
// `;

// const HeroImage = styled.img`
//   width: 90%;
//   max-width: 1000px;
//   border-radius: 10px;
// `;

// const Hero = () => {
//   return (
//     <HeroSection>
//       <HeroImage src="/banner.jpg" alt="Hero Banner" />
//     </HeroSection>
//   );
// };

// export default Hero;


import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  text-align: center;
  background: #f4f4f4;
  padding: 30px 0;
  display: flex;
  justify-content: center;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 1000px;
  height: auto;
  border-radius: 10px;
  object-fit: contain; /* Ensures the full banner is visible */
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroImage src="/banner.jpg" alt="Hero Banner" />
    </HeroSection>
  );
};

export default Hero;
