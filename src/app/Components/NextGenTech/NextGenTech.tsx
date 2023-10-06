import React from "react";
import styled from "styled-components";

import Image from "next/image";

import { AiFillYoutube } from 'react-icons/ai';

import DevOpsImage from "../../../../public/Assests/devops.jpg";
import DigiMobImage from "../../../../public/Assests/DigitalMobility.jpg";
import AutonomTestImage from "../../../../public/Assests/autonomoustesting.jpg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  margin-bottom: 50px;
`;

const Heading = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%; /* Adjust the width as needed */
`;

const LeftContainer = styled.div`
  flex: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightContainer = styled.div`
  flex: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

const ImageContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const ImageHeading = styled.h2`
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  text-transform: uppercase;
  color: #273881;
  font-weight: bold;
  letter-spacing: 1px;
  padding-bottom: 10px;
`;

const YoutubeLogo = styled(AiFillYoutube)`
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function NextGenTech() {
  return (
    <MainContainer>
      <Heading>
        We are a Gateway 
        <br />
        to Next-Generation Technologies
      </Heading>
      <SectionContainer>
        <LeftContainer>
          <ImageContainer>
          <ImageHeading>DevOps Solutions</ImageHeading>
            <Image src={DevOpsImage} alt="DevOps" width={1000} height={550} />
            {/* <YoutubeLogo /> */}
          </ImageContainer>
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
          <ImageHeading>Digital Mobility</ImageHeading>
            <Image src={DigiMobImage} alt="Digital Mobility" width={400} height={240} />
            {/* <YoutubeLogo /> */}
          </ImageContainer>
          <ImageContainer>
          <ImageHeading>Autonomous Testing</ImageHeading>
            <Image src={AutonomTestImage} alt="Autonomous Testing" width={400} height={240} />
            {/* <YoutubeLogo /> */}
          </ImageContainer>
        </RightContainer>
      </SectionContainer>
    </MainContainer>
  );
}
