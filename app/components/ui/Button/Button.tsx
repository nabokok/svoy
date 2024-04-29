import { ReactNode } from 'react';
import styles from './Button.module.css'

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button}>
        {children}
      </button>
    </div>
  )
}

export default Button;