"use client"
import React from 'react';
import styled from 'styled-components';
import Logo from '../../../../public/Assests/logo.png';
import Image from 'next/image';
import { FaBars,  FaSearch } from 'react-icons/fa';


const Header: React.FC = () => {
  return (
    <HeaderContainer>
        <ImageDiv>
            <Image src={Logo} alt="Logo" />
        </ImageDiv>
        <IconsContainer>
            <FaSearch style = {{ fontSize : "30px" }} />
            <FaBars style = {{ fontSize : "30px" }} />
        </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;



const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: #fff;
  width: 100%;

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


const ImageDiv = styled.div`

  & > img {
    max-width: 100%;
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

const IconsContainer = styled.div`
  display: flex;
  gap : 35px;
  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

