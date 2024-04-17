import Link from 'next/link';
import Button from '../ui/button/button';
import GradientButton from '../ui/gradientButton/gradientButton';
import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div>
          <div className={styles.linksWrapper}>
            <Link href="/" className={styles.link}>Rent</Link>
            <span>/</span>
            <Link href="/" className={styles.link}>Buy</Link>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.contentRow}>
              <GradientButton><Link href="/" className={styles.buttonLink}>Support Ukraine</Link></GradientButton>
              <h2 className={styles.contentTitle}>Real Estate</h2>
            </div>
            <div className={styles.contentRow}>
              <h2 className={styles.contentTitle}>With Svoy</h2>
              <Button><Link href="/" className={styles.buttonLink}>Whole colection</Link></Button>
              <span className={styles.caption}>Real Estate Agency</span>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero;