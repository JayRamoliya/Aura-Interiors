import React from "react";
import styled from "styled-components";
import products from "../products";



const ShopContainer = styled.div`
  margin: auto;
  padding: 50px 20px;
  text-align: center;
  background: #f8f1e4;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #5a4636;
  font-family: "Georgia", serif;
  margin-bottom: 30px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-content: center;
`;

const ProductCard = styled.a`
  background: #fff8f0;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  text-align: center;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 220px;
    height: 220px;
    max-width: 100%;
    border-radius: 10px;
    object-fit: cover;
    border: 2px solid #d3b897;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
    font-weight: bold;
    color: #5a4636;
    font-family: "Georgia", serif;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 16px;
    color: #a67b5b;
    font-weight: 600;
  }
`;

const Shop = () => {
  return (
    <ShopContainer>
      <Title>Discover Elegant Home Decor</Title>
      <ProductGrid>
        {products.map((product, index) => (
          <ProductCard href={product.link} target="_blank" rel="noopener noreferrer" key={index}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <span>{product.price}</span>
          </ProductCard>
        ))}
      </ProductGrid>
    </ShopContainer>
  );
};

export default Shop;
