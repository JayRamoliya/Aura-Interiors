// import React from "react";
// import styled from "styled-components";

// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px 40px;
//   background: #f8f1e4; /* Soft warm background */
//   border-bottom: 2px solid #d3b897;
//   font-family: "Georgia", serif;
// `;

// const Logo = styled.h1`
//   font-size: 28px;
//   font-weight: bold;
//   color: #5a4636;
//   letter-spacing: 1px;
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 30px;
// `;

// const NavItem = styled.a`
//   text-decoration: none;
//   color: #5a4636;
//   font-size: 18px;
//   font-weight: 600;
//   transition: color 0.3s ease-in-out;

//   &:hover {
//     color: #a67b5b;
//     text-decoration: underline;
//   }
// `;

// const Header = () => {
//   return (
//     <HeaderContainer>
//       <Logo>Aura Interiors</Logo>
//       <Nav>
//         <NavItem href="#">Furniture</NavItem>
//         <NavItem href="/shop">Shop</NavItem>
//         <NavItem href="#">Lighting</NavItem>
//         <NavItem href="#">Decor Accents</NavItem>
//         <NavItem href="#">Tableware</NavItem>
//       </Nav>
//     </HeaderContainer>
//   );
// };

// export default Header;





// import React from 'react';

// const Header = () => {
//   return (
//     <header className="w-full bg-white shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <h1 className="text-2xl font-['Pacifico'] text-primary">Aura Interiors</h1>
//           </div>

//           {/* Search Bar */}
//           {/* <div className="flex-1 max-w-xl mx-8">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//                 <div className="w-5 h-5 flex items-center justify-center text-gray-400">
//                   <i className="ri-search-line"></i>
//                 </div>
//               </div>
//               <input
//                 type="text"
//                 className="w-full py-2 pl-10 pr-12 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary"
//                 placeholder="Search for products, brands, rooms..."
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center">
//                 <button className="h-full px-3 text-gray-500 border-l border-gray-200 !rounded-button">
//                   <div className="flex items-center">
//                     <span className="mr-1 text-sm whitespace-nowrap">All Categories</span>
//                     <div className="w-4 h-4 flex items-center justify-center">
//                       <i className="ri-arrow-down-s-line"></i>
//                     </div>
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div> */}

//           {/* User Actions */}
//           {/* <div className="flex items-center space-x-6">
//             <div className="relative">
//               <div className="w-6 h-6 flex items-center justify-center text-gray-700 cursor-pointer">
//                 <i className="ri-heart-line ri-lg"></i>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="w-6 h-6 flex items-center justify-center text-gray-700 cursor-pointer">
//                 <i className="ri-user-line ri-lg"></i>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="w-6 h-6 flex items-center justify-center text-gray-700 cursor-pointer">
//                 <i className="ri-shopping-cart-line ri-lg"></i>
//               </div>
//               <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-primary text-white text-xs rounded-full">3</span>
//             </div>
//           </div> */}

//         </div>
//           {/* Navigation Menu */}
//           <nav>
//             <ul className="flex space-x-8">
//               <li><a href="#" className="text-primary font-medium">Home</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-primary">Furniture</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-primary">Decor</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-primary">Lighting</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-primary">Textiles</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-primary">Kitchen</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-primary">Bathroom</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-primary">Outdoor</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-primary">Sale</a></li>
//             </ul>
//           </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;






import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center ml-5">
            <h1 className="text-2xl font-['Pacifico'] text-primary">Aura Interiors</h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="ri-menu-line ri-2x"></i>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex md:items-center md:space-x-8 transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <li><a href="/" className="text-primary font-medium">Home</a></li>
              <li><a href="/shop" className="text-gray-600 hover:text-primary">Shop</a></li>
              <li><a href="/shop/room" className="text-gray-600 hover:text-primary">Room</a></li>
              <li><a href="/shop/bedroom" className="text-gray-600 hover:text-primary">BedRoom</a></li>
              <li><a href="/shop/ledwallart" className="text-gray-600 hover:text-primary">LED Wall Art</a></li>
              <li><a href="/shop/kitchen" className="text-gray-600 hover:text-primary">Kitchen</a></li>
              {/* <li><a href="#" className="text-gray-600 hover:text-primary">Bathroom</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Outdoor</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Sale</a></li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;