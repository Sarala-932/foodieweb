import React from 'react'

import ContactNav from '../components/navbar/ContactNav'
import MenuBar from '../components/navbar/MenuBar'
import styles from './Home.module.css'
import heroBg from '../assets/HomeImage1.png'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <ContactNav />
        <MenuBar title="FSD Fooder" />
      </header>

      <main>
        <section
          className={styles.hero}
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-label="Hero"
        >
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              Best food for
              <br />
              your taste
            </h1>
            <p className={styles.heroSubtitle}>
              Discover delectable cuisine and unforgettable moments
              <br />
              in our welcoming, culinary haven.
            </p>
            <div className={styles.heroActions}>
              <button type="button" className={`${styles.heroBtn} ${styles.primary}`}>
                Book A Table
              </button>
              <button type="button" className={`${styles.heroBtn} ${styles.secondary}`}>
                Explore Menu
              </button>
            </div>
          </div>
        </section>

        <section className={styles.menuSection} aria-label="Browse Our Menu">
          <h2 className={styles.menuSectionTitle}>Browse Our Menu</h2>
          <div className={styles.menuCards}>
            <div className={styles.menuCard}>
              <div className={styles.menuCardIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                  <path d="M20 5c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z" />
                </svg>
              </div>
              <h3 className={styles.menuCardTitle}>Breakfast</h3>
              <p className={styles.menuCardDescription}>
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <a href="#menu" className={styles.menuCardLink}>
                Explore Menu
              </a>
            </div>

            <div className={styles.menuCard}>
              <div className={styles.menuCardIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 9v6M9 12h6" />
                </svg>
              </div>
              <h3 className={styles.menuCardTitle}>Main Dishes</h3>
              <p className={styles.menuCardDescription}>
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <a href="#menu" className={styles.menuCardLink}>
                Explore Menu
              </a>
            </div>

            <div className={styles.menuCard}>
              <div className={styles.menuCardIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="12" height="16" rx="2" />
                  <path d="M8 4h8v12H8z" />
                  <path d="M10 8h4M10 12h4" />
                </svg>
              </div>
              <h3 className={styles.menuCardTitle}>Drinks</h3>
              <p className={styles.menuCardDescription}>
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <a href="#menu" className={styles.menuCardLink}>
                Explore Menu
              </a>
            </div>

            <div className={styles.menuCard}>
              <div className={styles.menuCardIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className={styles.menuCardTitle}>Desserts</h3>
              <p className={styles.menuCardDescription}>
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <a href="#menu" className={styles.menuCardLink}>
                Explore Menu
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
