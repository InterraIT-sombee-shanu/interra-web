
"use client"

import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background-image: url('https://www.interrait.com/sites/default/files/gbb-uploads/webp/bg03_opt.webp');
  background-size: cover;
  background-position: center;
  padding: 50px;
  text-align: center;
  color: #fff;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export default function InnovateWithUsSection()  {
  return (
    <SectionContainer>
      <Title>Innovate With Us!</Title>
      <Subtitle>Learn more about job and career opportunities at InterraIT</Subtitle>
      <Button>Careers</Button>
    </SectionContainer>
  );
};


