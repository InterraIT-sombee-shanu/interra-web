import React from "react";
import styled from "styled-components";

import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';

const SocialMediaIconsWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;


const SocialMediaLink = styled.a`
  margin: 0 10px;
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #fff;
  text-align: center;
  line-height: 50px; /* Set line-height to match the height of the circle */
  font-size: 20px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
  text-decoration: none;
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    z-index: 2;
  }

  &:hover .icon {
    color: #fff;
    transform: translate(-50%, -50%) scale(1.2); /* Add this line to scale the icon slightly on hover */
  }

  &:hover:before {
    top: 0;
  }

  .icon {
    position: relative;
    color: #262626;
    transition: 0.5s;
    z-index: 3;
  }

  &:hover .icon {
    color: #fff;
    transform: rotateY(360deg);
  }

  &:nth-child(1):before {
    background: #55acee;
  }

  &:nth-child(2):before {
    background: #3b5999;
  }

  &:nth-child(3):before {
    background: #cd201f;
  }

  &:nth-child(4):before {
    background: #0072b1;
  }

  &:nth-child(5):before {
    background-image: linear-gradient(#feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
  }
`;

export default function SocailSection() {
    return (
        <SocialMediaIconsWrapper>
            <SocialMediaLink href="#">
              <AiOutlineTwitter style = {{ fontSize: "30px" }} className = 'icon' />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.facebook.com/people/Interra-Information-Technologies/100083346548715/">
            <FaFacebookF style = {{ fontSize: "30px" }} className = 'icon' />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.youtube.com/user/InterraITOfficalPage">
            <AiFillYoutube style = {{ fontSize: "30px" }} className = 'icon' />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.linkedin.com/company/interra-information-technologies-interrait/mycompany/">
            <BiLogoLinkedin style = {{ fontSize: "30px" }} className = 'icon' />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.instagram.com/interrainformationtechnologies/?igshid=NDRkN2NkYzU%3D">
            <BsInstagram style = {{ fontSize: "30px" }} className = 'icon' />
            </SocialMediaLink>
        </SocialMediaIconsWrapper>
    )
}