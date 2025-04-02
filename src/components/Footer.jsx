import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div>
            <h1 className="text-2xl font-['Pacifico'] text-primary mb-4">logo</h1>
            <p className="text-gray-600 text-sm mb-6">
              Creating beautiful spaces that inspire and comfort since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
              >
                <i className="ri-pinterest-line"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Bestsellers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Furniture
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Decor & Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Lighting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Textiles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Design Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Customer Service</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Care & Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">&copy; 2025 HomeHaven. All rights reserved.</p>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-400">
                <i className="ri-visa-fill ri-lg"></i>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-mastercard-fill ri-lg"></i>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-paypal-fill ri-lg"></i>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-apple-fill ri-lg"></i>
              </div>
            </div>

            {/* Footer Links */}
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
