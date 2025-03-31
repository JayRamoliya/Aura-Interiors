import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  text-align: center;
  background: #f8f1e4; /* Warm and cozy background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto; /* Adjusts height dynamically */
  max-height: 90vh; /* Ensures it fits within the viewport */
  object-fit: contain; /* Ensures full image visibility */
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroImage src="/banner.png" alt="Beautiful Home Decor Banner" />
    </HeroSection>
  );
};

export default Hero;
