import { ReactNode } from 'react';
import styles from './gradientButton.module.css'

interface Props {
  children: ReactNode;
}

function GradientButton({ children }: Props) {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.gradientButton}>
        {children}
      </button>
    </div>
  )
}

export default GradientButton;