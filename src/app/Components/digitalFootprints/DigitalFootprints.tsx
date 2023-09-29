"use client"


import React from "react";
import styled from "styled-components";
import Card from "./card/Card";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px; /* Add the desired space between the cards */
`;


export default function DigitalFootprints() {
  return (
    <>
      <h2>We create digital footprints</h2>
      <br />
      <h3>Check out the latest tech talks & webinars</h3>
      <br />
      <CardContainer>
      <Card
          image="https://www.interrait.com/sites/default/files/gbb-uploads/webp/home_section5-_block1.webp"
          title="AMS For Development, SCM, Monitoring & Reporting"
          type="CASE STUDY"
          linkText="Download"
          linkRef="#"
        />
        <Card
          image="https://www.interrait.com/sites/default/files/gbb-uploads/webp/Technovate6_homepage.webp"
          title="Entrepreneur Or Small Business Owner: Which One Are You?"
          type="TECHNOVATE"
          linkText="View Video"
          linkRef="#"
        />
        <Card
          image="https://www.interrait.com/sites/default/files/gbb-uploads/webp/The-AI-Driven-Transformation-Of-Software-Testing.webp"
          title="The AI - Driven Transformation Of Software Testing "
          type="WEBINAR"
          linkText="View Video"
          linkRef="#"
        />
      </CardContainer>
    </>
  );
}
