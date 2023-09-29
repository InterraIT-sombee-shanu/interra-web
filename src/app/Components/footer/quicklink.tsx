import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-left: 21px;
  margin-bottom: 25px;
  box-shadow: 1px 1px 2px 2px #888888;
  background-color: ghostwhite;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 3px;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 0.5em 0.5em;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  text-align: center;
  padding: 0.5em 0.8em;
  position: relative;
  text-decoration: none;
  font-size: 15px;
  color: #000;

  &:before,
  &:after {
    content: '';
    height: 14px;
    width: 14px;
    position: absolute;
    transition: all 0.35s ease;
    opacity: 0;
  }

  &:before {
    content: '';
    right: 0;
    top: 0;
    border-right: 3px solid #182dc9;
    border-top: 3px solid #6b78d6;
    transform: translate(-100%, 50%);
  }

  &:after {
    content: '';
    left: 0;
    bottom: 0;
    border-left: 3px solid #182dc9;
    border-bottom: 3px solid #6b78d6;
    transform: translate(100%, -50%);
  }

  &:hover:before,
  &:hover:after {
    transform: translate(0, 0);
    opacity: 1;
  }

  &:hover {
    color: #0816E4;
  }
`;

export default function QuickLink() {
  return (
    <NavigationContainer>
      <NavList className="nav">
        <NavItem><NavLink href="#">Home</NavLink></NavItem>
        <NavItem><NavLink href="#">Digital Footprints</NavLink></NavItem>
        <NavItem><NavLink href="#">Careers</NavLink></NavItem>
      </NavList>
      <NavList className="nav">
        <NavItem><NavLink href="#">Services</NavLink></NavItem>
        <NavItem><NavLink href="#">About Us</NavLink></NavItem>
        <NavItem><NavLink href="#">Contact Us</NavLink></NavItem>
      </NavList>
      <NavList className="nav">
        <NavItem><NavLink href="#">Industries</NavLink></NavItem>
        <NavItem><NavLink href="#">News & Events</NavLink></NavItem>
        <NavItem><NavLink href="#">Blogs</NavLink></NavItem>
      </NavList>
    </NavigationContainer>
  );
}
