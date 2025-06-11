

import React, { useState } from "react";
import products from "../products";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get current page products
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  // Change page
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="mx-auto py-12 px-5 text-center bg-[#e3f2fd]">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#0d47a1] font-serif mb-8">
        Discover Elegant Home Decor
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {currentProducts.map((product, index) => (
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
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-10 flex justify-center items-center gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-[#90caf9] text-[#0d47a1] rounded hover:bg-[#64b5f6] disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-[#1976d2] text-white"
                : "bg-[#bbdefb] text-[#0d47a1] hover:bg-[#90caf9]"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-[#90caf9] text-[#0d47a1] rounded hover:bg-[#64b5f6] disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
