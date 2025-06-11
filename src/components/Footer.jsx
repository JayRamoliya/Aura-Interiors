


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-200 text-center">
      <div className="container mx-auto px-4">
        {/* Brand Name */}
        <h1 className="text-2xl font-['Pacifico'] text-[#0d47a1] mb-3">Aura Interiors</h1>

        {/* Pinterest Icon */}
        <div className="mb-3">
          <a href="https://in.pinterest.com/homedeco133/" className="inline-block text-gray-500 hover:text-[#bd081c]">
            <i className="ri-pinterest-line text-2xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">&copy; 2025 Aura Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
