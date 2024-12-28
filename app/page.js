"use client";
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "./page.module.css"
import {useState} from "react"
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Home() {
  const router = useRouter();

    const handleButtonClick = (number) => {
        // Naviguer vers la page de destination avec le nombre de photos
        router.push('./pages/form');
    };

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>NOTRE TARIFICATION</h1>
          <div>
            <div className={styles.offres}>
              <h2 className={styles.label}>Tirage simple</h2>
              <div className={styles.tarifs}>
                <div className={styles.price}>
                  <p>
                    10 photos
                  </p>
                  <p className={styles.prix}>
                    3 000 FCFA
                  </p>
                  <button className={styles.submit} onClick={() => handleButtonClick(10)}>Valider</button>
                </div>
              </div>
            </div>
            <div className={styles.offres}>
              <h2 className={styles.label}>Agrandissement photo sur du bois</h2>
              <div className={styles.tarifs}>
              <div className={styles.price}>
                <p>
                  10 * 30/24 * 30 cm
                </p>
                <p className={styles.prix}>
                  5 000 FCFA
                </p>
                <button className={styles.submit} onClick={() => handleButtonClick(10)}>Valider</button>
              </div>
                <div className={styles.price}>
                  <p>
                    30 * 40/35 * 40 cm
                  </p>
                  <p className={styles.prix}>
                    9 000 FCFA
                  </p>
                  <button className={styles.submit} onClick={() => handleButtonClick(30)}>Valider</button>
                </div>
                <div className={styles.price}>
                  <p>
                    40 * 50/40 * 60 cm
                  </p>
                  <p className={styles.prix}>
                    15 000 FCFA
                  </p>
                  <button className={styles.submit} onClick={() => handleButtonClick(40)}>Valider</button>
                </div>
                <div className={styles.price}>
                  <p>
                    10 * 80 cm
                  </p>
                  <p className={styles.prix}>
                    20 000 FCFA
                  </p>
                  <button className={styles.submit} onClick={() => handleButtonClick(10)}>Valider</button>
                </div>
              </div>
            </div>
            <div className={styles.offres}>
              <h2 className={styles.label}>Agrandissement photo avec cadre en verre</h2>
              <div className={styles.tarifs}>
                <div className={styles.price}>
                  <p>
                    10 * 15 cm
                  </p>
                  <p className={styles.prix}>
                    4 000 FCFA
                  </p>
                  <button className={styles.submit} onClick={() => handleButtonClick(10)}>Valider</button>
                </div>
                <div className={styles.price}>
                  <p>
                    13 * 18 cm
                  </p>
                  <p className={styles.prix}>
                    4 500 FCFA
                  </p>
                  <button className={styles.submit} onClick={() => handleButtonClick(13)}>Valider</button>
                </div>
              </div>
            </div>
            <div className={styles.offres}>
              <h2 className={styles.label}>Agrandissement photo avec cadre en bois à partir de 15 000 FCFA</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
