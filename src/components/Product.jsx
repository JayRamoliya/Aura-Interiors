// import React from "react";

// const Product = ({ image, title, price, link }) => {
//     return (
//         <div className="min-w-[280px] max-w-[280px] bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group">
//             <div className="relative h-64 overflow-hidden">
//                 <img src={image} alt={title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
//             </div>
//             <div className="p-4">
//                 <h3 className="font-medium mb-1">{title}</h3>
//                 <div className="flex justify-between items-center">
//                     <div>
//                         <span className="font-bold text-lg">{price}</span>
//                     </div>
//                     <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-full !rounded-button whitespace-nowrap transition-colors">
//                         <div className="w-6 h-6 flex items-center justify-center">
//                             <i className="ri-shopping-cart-line"></i>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Product;







import React from "react";

const Product = ({ image, title, price, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="w-full sm:max-w-[280px] bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
                <div className="relative h-64 overflow-hidden">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-medium mb-1 text-sm sm:text-base">{title}</h3>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-lg sm:text-xl">{price}</span>
                        <button 
                            className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-full !rounded-button whitespace-nowrap transition-colors"
                        >
                            <div className="w-6 h-6 flex items-center justify-center">
                                <i className="ri-shopping-cart-line"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Product;









// import React from "react";
// import Product from "./Product";

// const products = [
//   {
//     id: 1,
//     name: "Handmade Peacock LED Wall Art Elegant 3D Sculpture",
//     category: "1",
//     price: "$39",
//     image: "/led/Handmade Peacock LED Wall Art Elegant 3D Sculpture.jpg",
//     link: "https://amzn.to/4iUkNBm",
//     oldPrice: "$49",
//     rating: 4,
//     label: "New",
//     labelType: "new"
//   },
// ];

// const ProductList = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <Product
//             key={product.id}
//             image={product.image}
//             title={product.name}
//             description={product.category}
//             price={product.price}
//             oldPrice={product.oldPrice}
//             rating={product.rating}
//             label={product.label}
//             labelType={product.labelType}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
