// import React from "react";
// import styled from "styled-components";

// const products = [
//   { img: "TV Unit in Classic Walnut Finish.jpg", name: "TV Unit in Classic Walnut Finish" },
//   { img: "TV Unit in Classic Walnut Finish.jpg", name: "Metal Book Stand" },
//   { img: "TV Unit in Classic Walnut Finish.jpg", name: "Scented Candle" },
//   { img: "TV Unit in Classic Walnut Finish.jpg", name: "Sculptural Vase" },
// ];

// const ProductsWrapper = styled.div`
//   width: 90%;
//   margin: auto;
//   padding: 20px 0;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 20px;
//   justify-content: center;
//   text-align: center;
// `;

// const ProductCard = styled.div`
//   background: #f9f9f9;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
//   img {
//     width: 200px;
//     height: 200px;
//     max-width: 100%;
//     border-radius: 8px;
//     object-fit: cover;
//   }

//   p {
//     font-size: 16px;
//     margin-top: 10px;
//     font-weight: bold;
//   }
// `;

// const ProductGrid = () => {
//   return (
//     <ProductsWrapper>
//       {products.map((product, index) => (
//         <ProductCard key={index}>
//           <img src={product.img} alt={product.name} />
//           <p>{product.name}</p>
//         </ProductCard>
//       ))}
//     </ProductsWrapper>
//   );
// };

// export default ProductGrid;




import React from "react";
import styled from "styled-components";

const products = [
  { img: "TV Unit in Classic Walnut Finish.jpg", name: "TV Unit in Classic Walnut Finish" },
  { img: "TV Unit in Classic Walnut Finish.jpg", name: "Metal Book Stand" },
  { img: "TV Unit in Classic Walnut Finish.jpg", name: "Scented Candle" },
  { img: "TV Unit in Classic Walnut Finish.jpg", name: "Sculptural Vase" },
];

const ProductsWrapper = styled.div`
  margin: auto;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-content: center;
  text-align: center;
  background: #f8f1e4; /* Warm background */
  padding: 40px;
`;

const ProductCard = styled.div`
  background: #fff8f0;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

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
    margin-top: 15px;
    font-weight: bold;
    color: #5a4636;
    font-family: "Georgia", serif;
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
