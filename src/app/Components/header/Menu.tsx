import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

interface MenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Menu({ isMenuOpen, toggleMenu }: MenuProps) {
  return (
    <>
      <IconContainer>
        <AiOutlineClose style={{ fontSize: "30px" }} onClick={toggleMenu}/>
      </IconContainer>

      <MenuList>
        <MenuItem>
          <a href="#">Home</a>
        </MenuItem>
        <MenuItem>
          <a href="#">About Us</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Services</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Industries</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Insights</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Life At InterraIT</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Careers</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Contact Us</a>
        </MenuItem>
      </MenuList>
    </>
  );
}

// Styled Components

// Icon
const IconContainer = styled.div`
  margin-top: 60px;
  margin-left: 50%;
  color: #28997F;
  &:hover {
    color: #DA2C43;
  }
`;

// items of menu -> ul
const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
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
    text-decoration: none;
    color: inherit;
    border-bottom: 0;
    display: block;

    &:after {
      content: "";
      height: 100%;
      left: 0;
      top: 0;
      width: 0px;
      position: absolute;
      transition: all 0.3s ease 0s;
      -webkit-transition: all 0.3s ease 0s;
      z-index: -1;
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
    border-left: 10px solid #f0776a;
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
