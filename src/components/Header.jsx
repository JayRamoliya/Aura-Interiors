import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #f8f1e4; /* Soft warm background */
  border-bottom: 2px solid #d3b897;
  font-family: "Georgia", serif;
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #5a4636;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #5a4636;
  font-size: 18px;
  font-weight: 600;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #a67b5b;
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Aura Interiors</Logo>
      <Nav>
        <NavItem href="#">Furniture</NavItem>
        <NavItem href="/shop">Shop</NavItem>
        <NavItem href="#">Lighting</NavItem>
        <NavItem href="#">Decor Accents</NavItem>
        <NavItem href="#">Tableware</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
