import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './MobileButton.module.css';

interface Props {
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const MobileButton = ({ children, isActive, onClick }: Props) => {
  return (
    <button className={cn(styles.mobileButton, { [styles.isActive]: isActive })} onClick={onClick}>
      {children}
    </button>
  )
}

export default MobileButton;