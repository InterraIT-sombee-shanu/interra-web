
"use client"
import Image from 'next/image'
import styles from './page.module.css'
import DigitalFootprints from './Components/digitalFootprints/DigitalFootprints';
import InnovateWithUsSection from './Components/innovateWithUs/InnovateWithUs';
import styled from 'styled-components';
import InterraImageCarousel from './Components/InterraImageCarousel/InterraImg';
import NextGenTech from './Components/NextGenTech/NextGenTech';

const DigitalFootprintsContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export default function Home() {
  const pageTitle = "Home";
  return (
    <main className={styles.main}  style={{ padding: 0 }}>

      <InterraImageCarousel/>

      {/* <NextGenTech />

      <DigitalFootprintsContainer>
        <DigitalFootprints />
      </DigitalFootprintsContainer>
      
      <InnovateWithUsSection /> */}

    </main>
  )
}

