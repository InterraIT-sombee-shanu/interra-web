"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../../../public/Assests/logo.png';
import Image from 'next/image';
import { FaBars,  FaSearch, FaRegWindowClose } from 'react-icons/fa';
// import { AiFillCloseSquare } from 'react-icons/ai';
import SearchForm from './searchform';


export default function Header() {


  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


  function toggleSearchForm() {
    setIsSearchClicked(!isSearchClicked); 
    setIsMenuOpen(false); // if the search is open menu sholud be closed
  }

  function toggleMenu() {
    setIsSearchClicked(false); // if the menu is open search sholud be closed
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <HeaderContainer>
        <ImageDiv>
            <Image src={Logo} alt="Logo" />
        </ImageDiv>
        <IconsContainer>
            <FaSearch style = {{ fontSize : "30px" }} onClick = {toggleSearchForm} />
            {isMenuOpen ? 
            (
              <FaRegWindowClose style={{ fontSize: "30px" }} onClick={ toggleMenu } />
            ) 
          : 
            (
            <FaBars style={{ fontSize: "30px" }} onClick={ toggleMenu } />
            )}
        </IconsContainer>
        { isSearchClicked && <SearchForm /> }
        <MenuContainer className={isMenuOpen ? 'open' : ''}>
        <MenuList>
          <MenuItem><a href='#'>Home</a></MenuItem>
          <MenuItem><a href='#'>About Us</a></MenuItem>
          <MenuItem><a href='#'>Services</a></MenuItem>
          <MenuItem><a href='#'>Industries</a></MenuItem>
          <MenuItem><a href='#'>Insights</a></MenuItem>
          <MenuItem><a href='#'>Life At InterraIT</a></MenuItem>
          <MenuItem><a href='#'>Careers</a></MenuItem>
          <MenuItem><a href='#'>Contact Us</a></MenuItem>
        </MenuList>
      </MenuContainer>
    </HeaderContainer>
  );
};



// this is the main container
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 110px;
  background-color: #fff;
  width: 100%;
  position: fixed;

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
    padding: 12px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }
`;

// Logo
const ImageDiv = styled.div`

  & > img { /* targetting the image */
    max-width: 90%;
    height: auto;

    @media (max-width: 576px) {
        margin-right: 0;
        margin-bottom: 12px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        max-width: 60px; /* Adjust the logo width for tablets */
    }
  }
`;

// Search and Hamburger icon
const IconsContainer = styled.div`
  display: flex;
  gap : 35px;
  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

// list of menu
const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: -300px;
  height: 100%;
  width: 310px;
  background-color: #fff;
  transition: right 0.5s ease-in-out;
  box-sizing: border-box;
  box-shadow: 0 0 10px 0 black;

  &.open {
    right: 0; /* Slide the menu in when open */
  }
`;

// items of menu -> ul
const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 20px;
  height: 100%;
  letter-spacing: 2px;
`;

// items of menu -> li
const MenuItem = styled.li`
  margin: 13px 0;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  /* Add styles for the anchor tag */
  a {
    text-decoration: none; /* Remove underline from links */
    color: inherit; /* Inherit text color */
    border-bottom: 0; /* Remove bottom border */
    display: block; /* Make the anchor tag a block element for full width */

    &:after {
      content: "";
      height: 100%;
      left: 0;
      top: 0;
      width: 0px;
      position: absolute;
      transition: all 0.3s ease 0s;
      -webkit-transition: all 0.3s ease 0s;
      z-index: -2;
    }

    &:hover:after {
      width: 100%;
    }
  }
  
  /* Apply border and background styles based on index */
  &:nth-child(1) a {
    border-left: 10px solid #3498db;
    padding-left: 7px;
    height: 50px;
    padding-top: 13px;
    width: 270px;
    &:after {
      background: #3498db;
    }
  }

  &:nth-child(2) a {
    border-left: 10px solid #ffd071;
    padding-left: 7px;
    height: 50px;
    padding-top: 13px;
    width: 270px;
    &:after {
      background: #ffd071;
    }
  }

  &:nth-child(3) a {
    border-left: 10px solid #f0776c;
    padding-left: 7px;
    height: 50px;
    padding-top: 13px;
    width: 270px;
    &:after {
      background: #f0776c;
    }
  }

  &:nth-child(4) a {
    border-left: 10px solid #1abc9c;
    padding-left: 7px;
    height: 50px;
    padding-top: 13px;
    width: 270px;
    &:after {
      background: #1abc9c;
    }
  }

  /* Add styles for additional items */
  &:nth-child(5) a {
    border-left: 10px solid #ff5733;
    padding-left: 7px;
    height: 50px;
    padding-top: 13px;
    width: 270px;
    &:after {
      background: #ff5733;
    }
  }

  &:nth-child(6) a {
    border-left: 10px solid #ffcc29;
    padding-left: 7px;
    height: 50px;
    padding-top: 13px;
    width: 270px;
    &:after {
      background: #ffcc29;
    }
  }

  &:nth-child(7) a {
    border-left: 10px solid #9b59b6;
    padding-left: 7px;
    height: 50px;
    padding-top: 13px;
    width: 270px;
    &:after {
      background: #9b59b6;
    }
  }

  &:nth-child(8) a {
    border-left: 10px solid aqua;
    padding-left: 7px;
    height: 50px;
    padding-top: 13px;
    width: 270px;
    &:after {
      background: aqua;
    }
  }
`;


