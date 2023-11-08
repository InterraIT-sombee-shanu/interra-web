import React from "react";
import styled from "styled-components";

import Image from "next/image";

import { useState } from "react";

import YouTube from "react-youtube";

import { AiFillYoutube, AiOutlineClose } from "react-icons/ai";

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
  width: 100%;
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
  position: relative;
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

const YoutubeButton = styled(AiFillYoutube)`
  font-size: 70px;
  position: absolute;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: font-size 0.5s;
  &:hover {
    font-size: 40px;
  }
`;

const CloseButton = styled(AiOutlineClose)`
  left: 42%;
  font-size: 30px;
  position: relative;
  cursor: pointer;
`;

const VideoContainer = styled.div`
  left: 34%;
  position: absolute;
  width: 100%;
  padding-top: 5%;
`;

const videoLinks = {
  devOps: "ZJem7WOtGJw",
  digitalMobility: "8D4Y2TMNssc",
  autonomousTesting: "5MU45A7Su0A",
};

// : { height: string; width: string; playerVars: { [key: string]: string } }

export default function NextGenTech() {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [videoLink, setVideoLink] = useState<string>("");
  const [videoOptions, setVideoOptions] = useState({
    height: "420",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  });

  const onVideoButtonClick = (link: string) => {
    setShowVideo(true);
    setVideoLink(link);
    console.log("Clicked");
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

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
            <YoutubeButton
              onClick={() => onVideoButtonClick(videoLinks.devOps)}
            />
          </ImageContainer>
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            <ImageHeading>Digital Mobility</ImageHeading>
            <Image
              src={DigiMobImage}
              alt="Digital Mobility"
              width={400}
              height={240}
            />

            <YoutubeButton
              onClick={() => onVideoButtonClick(videoLinks.digitalMobility)}
            />
          </ImageContainer>
          <ImageContainer>
            <ImageHeading>Autonomous Testing</ImageHeading>
            <Image
              src={AutonomTestImage}
              alt="Autonomous Testing"
              width={400}
              height={240}
            />

            <YoutubeButton
              onClick={() => onVideoButtonClick(videoLinks.autonomousTesting)}
            />
          </ImageContainer>
        </RightContainer>
      </SectionContainer>
      {showVideo ? (
        <VideoContainer>
          <CloseButton onClick={closeVideo}>Close Video</CloseButton>
          <YouTube videoId={videoLink} opts={videoOptions} />
        </VideoContainer>
      ) : null}
    </MainContainer>
  );
}
