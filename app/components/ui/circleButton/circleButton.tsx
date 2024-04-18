import { ReactNode } from 'react';
import styles from './circleButton.module.css'

interface Props {
  children: ReactNode;
}

function CircleButton({ children }: Props) {
  return (
    <button className={styles.circleButton}>
      {children}
    </button>
  )
}

export default CircleButton;