"use client";

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 100%;

`;
const CardBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;
  justify-content: flex-end;
  
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const CardTitle = styled.a`
  font-size: 18px;
  margin-bottom: 8px;
  text-decoration: none;
  font-weight: bold;
  color: #273881;
  height:60px;
`;

const CardType = styled.p`
  font-size: 16px;
  color: #888;
  margin-bottom: 8px;
  font-weight: bold;
  margin-top: auto;
`;

const CardLink = styled.a`
  font-size: 16px;
  color: #e54f46;
  text-decoration: none; /* Remove the underline */
  font-weight: bold; /* Make it bold */
  margin-top: auto;
  text-align: center;
`;

interface CardProps {
  image: string;
  title: string;
  type: string;
  linkText: string;
  linkRef: string;
}

export default function Card(props: CardProps) {
  const { image, title, type, linkText, linkRef } = props;

  return (
    <CardContainer>
      <CardImage src={image} alt="Card Image" />
      <CardBody>
        <CardTitle href={linkRef}>{title}</CardTitle> 
        <CardType>{type}</CardType>
        <CardLink target="_blank" rel="noopener noreferrer"  href={linkRef}>{linkText}  <FontAwesomeIcon icon={faArrowRight} /></CardLink>
      </CardBody>
    </CardContainer>
  );
}
