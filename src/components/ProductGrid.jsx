import React from "react";
import styled from "styled-components";

const products = [
  { img: "TV Unit in Classic Walnut Finish.jpg", name: "TV Unit in Classic Walnut Finish" },
  { img: "TV Unit in Classic Walnut Finish.jpg", name: "Metal Book Stand" },
  { img: "TV Unit in Classic Walnut Finish.jpg", name: "Scented Candle" },
  { img: "TV Unit in Classic Walnut Finish.jpg", name: "Sculptural Vase" },
];

const ProductsWrapper = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  justify-content: center;
  text-align: center;
`;

const ProductCard = styled.div`
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }

  p {
    font-size: 14px;
    margin-top: 5px;
  }
`;

const ProductGrid = () => {
  return (
    <ProductsWrapper>
      {products.map((product, index) => (
        <ProductCard key={index}>
          <img src={product.img} alt={product.name} />
          <p>{product.name}</p>
        </ProductCard>
      ))}
    </ProductsWrapper>
  );
};

export default ProductGrid;
