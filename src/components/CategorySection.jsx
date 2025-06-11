


import React from 'react';
import { Link } from 'react-router-dom';

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
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <Link
              to={`/shop/${category.link}`}
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-3 shadow-inner">
                <i className={`${category.icon} ri-xl`}></i>
              </div>
              <span className="text-sm font-medium text-gray-700">{category.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
