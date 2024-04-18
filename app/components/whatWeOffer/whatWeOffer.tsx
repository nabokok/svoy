import Image from 'next/image';
import styles from './whatWeOffer.module.css'
import CircleButton from '../ui/circleButton/circleButton';

function WhatWeOffer() {
  return (
    <section className={styles.whatWeOffer}>
      <div className="container">
        <div className={styles.whatWeOfferWrapper}>
          <div className={styles.whatWeOfferImages}>
            <Image
              alt='what-we-offer-1'
              src='/images/what-we-offer-1.jpeg'
              width="534"
              height="631"
            />
            <Image
              alt='what-we-offer-1'
              src='/images/what-we-offer-2.jpeg'
              width="387"
              height="240"
              className={styles.whatWeOfferSmallImage}
            />
          </div>

          <div className={styles.whatWeOfferText}>
            <h3 className={styles.title}>What</h3>
            <h3 className={styles.title}>we offer</h3>
            <p className={styles.description}>
              Our architecture encourages co-existence.
              So does our business philosophy. We have abolished barriers of hierarchy and departmentalization to work as a single team.
              We believe in full transparency — and of course, that entails our clients.
            </p>
          </div>
          <div className={styles.button}>
            <CircleButton>Learn More</CircleButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer;