import cn from 'classnames'
import styles from './BurgerIcon.module.css'

interface Props {
  isActive: boolean;
}

const BurgerIcon = ({ isActive }: Props) => {
  return (
    <div className={cn(styles.burgerWrapper, { [styles.isActive]: isActive })}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerIcon;