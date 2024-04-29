import { ReactNode } from 'react';
import styles from './GradientButton.module.css'

interface Props {
  children: ReactNode;
}

const GradientButton = ({ children }: Props) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.gradientButton}>
        {children}
      </button>
    </div>
  )
}

export default GradientButton;