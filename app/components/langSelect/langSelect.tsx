'use client';

import { useState } from 'react';
import cn from 'classnames';
import styles from './langSelect.module.css'

enum Lang {
  UA = 'UA',
  EN = 'EN',
}
function LangSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Lang>(Lang.EN);

  const handleChange = (value: Lang) => {
    setSelectedValue(value);
    handleToggle();
  }

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={styles.select}>
      <div className={cn(styles.selectHeader, {
        [styles.selectHeaderActive]: isOpen
      })} onClick={handleToggle}>{selectedValue}</div>
      <div className={cn(styles.selectBody, {
        [styles.selectBodyActive]: isOpen
      })}>
        <div className={styles.selectOption} onClick={() => {
          handleChange(selectedValue === Lang.EN ? Lang.UA : Lang.EN)
        }}>
          {selectedValue === Lang.EN ? Lang.UA : Lang.EN}
        </div>
      </div>
    </div>
  )
}

export default LangSelect;