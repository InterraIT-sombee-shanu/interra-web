"use client"

import React from 'react';
import styled from 'styled-components';


import FooterForm from './footerform';
import SocailSection from './socialsection';

const FooterContainer = styled.footer`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 20px;
  letter-spacing: 1px;
  width: 100%;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  text-align: center;
`;

const RightSide = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;

const RightSideHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #000;
`;

const RightSideParagraph = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  color: #000;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 340px;
  background-color: #999;
`;

const CenteredVerticalLineWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <LeftSide>
        <Paragraph>We are a Silicon Valley based IT services organization that provides cutting-edge business and technology solutions, as well as immersive digital experiences to our clients around the world.</Paragraph>
        <SocailSection />
      </LeftSide>
      <CenteredVerticalLineWrapper>
        <VerticalLine />
      </CenteredVerticalLineWrapper>
      <RightSide>
        <RightSideHeader>Revolutionize Your Business With InterraIT</RightSideHeader>
        <RightSideParagraph>Feel free to contact us with any quiries. We had be happy to assist you.</RightSideParagraph>
        <FooterForm />
      </RightSide>
    </FooterContainer>
  );
}
