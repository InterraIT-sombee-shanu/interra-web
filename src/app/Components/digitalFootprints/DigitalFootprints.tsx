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
      <h1>We create digital footprints</h1>
      <br />
      <h2>Check out the latest tech talks & webinars</h2>
      <br />
      <CardContainer>
      <Card
          image="https://www.interrait.com/sites/default/files/gbb-uploads/webp/home_section5-_block1.webp"
          title="AMS For Development, SCM, Monitoring & Reporting"
          type="CASE STUDY"
          linkText="Download"
          linkRef="https://www.interrait.com/sites/default/files/gbb-uploads/pdffiles/AMS_Case_study_AMS_for_Development,_SCM,_Monitoring_and_Reporting.pdf"
        />
        <Card
          image="https://www.interrait.com/sites/default/files/gbb-uploads/webp/Technovate6_homepage.webp"
          title="Entrepreneur Or Small Business Owner: Which One Are You?"
          type="TECHNOVATE"
          linkText="View Video"
          linkRef="https://www.youtube.com/watch?v=fSmONMv-sbk&t=1366s"
        />
        <Card
          image="https://www.interrait.com/sites/default/files/gbb-uploads/webp/The-AI-Driven-Transformation-Of-Software-Testing.webp"
          title="The AI - Driven Transformation Of Software Testing "
          type="WEBINAR"
          linkText="View Video"
          linkRef="https://www.youtube.com/watch?v=mRqWqJ4Ic8g"
        />
      </CardContainer>
    </>
  );
}
