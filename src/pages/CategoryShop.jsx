import React from "react";
import { useParams } from "react-router-dom";
import products from "../products"; // Import your products data

const CategoryShop = () => {
  const { category } = useParams(); // Get the category from the URL
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="mx-auto py-12 px-5 text-center bg-[#e3f2fd]">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#0d47a1] font-serif mb-8">
        {category.charAt(0).toUpperCase() + category.slice(1)} Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-[#bbdefb] p-5 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 text-center text-inherit no-underline"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[220px] h-[220px] max-w-full rounded-md object-cover border-2 border-[#1e88e5] mx-auto"
              />
              <p className="text-lg font-bold text-[#0d47a1] font-serif mt-3">{product.name}</p>
              <span className="block mt-2 text-base text-[#1565c0] font-semibold">{product.price}</span>
            </a>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryShop;
