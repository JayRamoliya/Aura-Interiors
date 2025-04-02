// import React from 'react';

// const CategorySection = () => {
//   const categories = [
//     { icon: 'ri-sofa-line', label: 'Living Room' },
//     { icon: 'ri-hotel-bed-line', label: 'Bedroom' },
//     { icon: 'ri-restaurant-line', label: 'Dining' },
//     { icon: 'ri-home-office-line', label: 'Office' },
//     { icon: 'ri-door-open-line', label: 'Outdoor' },
//     { icon: 'ri-lightbulb-line', label: 'Lighting' },
//     { icon: 'ri-plant-line', label: 'Plants' },
//     { icon: 'ri-gift-line', label: 'Gifts' },
//   ];

//   return (
//     <section className="bg-white py-8 shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center flex-wrap">
//           {categories.map((category, index) => (
//             <a
//               href="#"
//               key={index}
//               className="flex flex-col items-center p-4 transition-all hover:text-primary"
//             >
//               <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-2">
//                 <i className={`${category.icon} ri-lg text-primary`}></i>
//               </div>
//               <span className="text-sm font-medium">{category.label}</span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategorySection;



// import React from 'react';

// const CategorySection = () => {
//   const categories = [
//     { icon: 'ri-sofa-line', label: 'Living Room' },
//     { icon: 'ri-hotel-bed-line', label: 'Bedroom' },
//     { icon: 'ri-restaurant-line', label: 'Dining' },
//     { icon: 'ri-home-office-line', label: 'Office' },
//     { icon: 'ri-door-open-line', label: 'Outdoor' },
//     { icon: 'ri-lightbulb-line', label: 'Lighting' },
//     { icon: 'ri-plant-line', label: 'Plants' },
//     { icon: 'ri-gift-line', label: 'Gifts' },
//   ];

//   return (
//     <section className="bg-white py-8 shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
//           {categories.map((category, index) => (
//             <a
//               href="#"
//               key={index}
//               className="flex flex-col items-center p-4 transition-all hover:text-primary"
//             >
//               <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-2">
//                 <i className={`${category.icon} ri-lg text-primary`}></i>
//               </div>
//               <span className="text-sm font-medium">{category.label}</span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategorySection;




import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const CategorySection = () => {
  const categories = [
    { icon: 'ri-sofa-line', label: 'Living Room', link: 'living-room' },
    { icon: 'ri-hotel-bed-line', label: 'Bedroom', link: 'bedroom' },
    { icon: 'ri-restaurant-line', label: 'Dining', link: 'dining' },
    { icon: 'ri-home-office-line', label: 'Office', link: 'office' },
    { icon: 'ri-door-open-line', label: 'Outdoor', link: 'outdoor' },
    { icon: 'ri-lightbulb-line', label: 'Lighting', link: 'lighting' },
    { icon: 'ri-plant-line', label: 'Plants', link: 'plants' },
    { icon: 'ri-gift-line', label: 'Gifts', link: 'gifts' },
  ];

  return (
    <section className="bg-white py-8 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
          {categories.map((category, index) => (
            <Link
              to={`/shop/${category.link}`} // Link to the CategoryShop with the category slug
              key={index}
              className="flex flex-col items-center p-4 transition-all hover:text-primary"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-2">
                <i className={`${category.icon} ri-lg text-primary`}></i>
              </div>
              <span className="text-sm font-medium">{category.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
