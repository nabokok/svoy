import { ReactNode } from 'react';
import styles from './button.module.css'

interface Props {
  children: ReactNode;
}

function Button({ children }: Props) {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button}>
        {children}
      </button>
    </div>
  )
}

export default Button;