import Image from 'next/image'
import styles from './page.module.css'
import DigitalFootprints from './Components/digitalFootprints/DigitalFootprints';


export default function Home() {
  const pageTitle = "Home";
  return (
    <main className={styles.main}>
      <DigitalFootprints/>
    </main>
  )
}
