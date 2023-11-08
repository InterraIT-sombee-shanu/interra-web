"use client";
import styles from "./page.module.css";

import styled from "styled-components";

import DigitalFootprints from "./Components/digitalFootprints/DigitalFootprints";
import InnovateWithUsSection from "./Components/innovateWithUs/InnovateWithUs";
import InterraImageCarousel from "./Components/InterraImageCarousel/InterraImg";
import NextGenTech from "./Components/NextGenTech/NextGenTech";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";

const DigitalFootprintsContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export default function Home() {
  const pageTitle = "Home";
  return (
    <main className={styles.main} style={{ padding: 0 }}>
      <Header />

      <InterraImageCarousel />

      <NextGenTech />

      <DigitalFootprintsContainer>
        <DigitalFootprints />
      </DigitalFootprintsContainer>

      <InnovateWithUsSection />
      <Footer />
    </main>
  );
}
