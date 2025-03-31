import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: white;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    color: #007bff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>ShopMate</Logo>
      <Nav>
        <NavItem href="#">All Departments</NavItem>
        <NavItem href="#">Toys & Crafts</NavItem>
        <NavItem href="#">Kitchen & Home</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
