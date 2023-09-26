"use client"


import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../../../public/Assests/logo.png';
import Image from 'next/image';
import { AiOutlineSearch, AiOutlineBars, AiOutlineClose } from 'react-icons/ai';


import SearchForm from './searchform';
import Menu from './Menu';


export default function Header() {

  // all the hoooks related stuff
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // all the functions for the working functionalities
  function toggleSearchForm() {
    setIsSearchClicked(!isSearchClicked); 
    setIsMenuOpen(false); // if the search is open menu sholud be closed
  }

  function toggleMenu() {
    setIsSearchClicked(false); // if the menu is open search sholud be closed
    setIsMenuOpen(!isMenuOpen);
  }

  
  // react return
  return (
    <HeaderContainer>
        <ImageDiv>
            <Image src={Logo} alt="Logo" />
        </ImageDiv>
        <IconsContainer>
            <AiOutlineSearch style = {{ fontSize : "36px" }} onClick = {toggleSearchForm} />
            {isMenuOpen ? 
            (
              <AiOutlineClose style={{ fontSize: "36px" }} onClick={ toggleMenu } />
            ) 
          : 
            (
            <AiOutlineBars style={{ fontSize: "36px" }} onClick={ toggleMenu } />
            )}
        </IconsContainer>
        { isSearchClicked && <SearchForm /> }
        <MenuContainer className={isMenuOpen ? 'open' : ''}>
            <Menu />
        </MenuContainer>
    </HeaderContainer>
  );
};



// Styled Components

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
  right: -295px;
  height: 100%;
  width: 310px;
  background-color: #fff;
  transition: right 0.6s ease-in-out;
  box-sizing: border-box;
  box-shadow: 0 0 20px 3px black;

  &.open {
    right: 0; /* Slide the menu in when open */
  }
`;


