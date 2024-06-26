import Link from 'next/link';
import Button from '../ui/Button/Button';
import GradientButton from '../ui/GradientButton/GradientButton';
import styles from './Hero.module.css';


const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroWrapper}>
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
          <div className={styles.circleContainer}>
            <div className={styles.animatedCircle}></div>
            <div className={styles.animatedCircle}></div>
            <div className={styles.animatedCircle}></div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero;