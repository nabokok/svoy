'use client';

import { useState } from 'react';
import cn from 'classnames';
import styles from './LangSelect.module.css';

enum Lang {
  UA = 'UA',
  RU = 'RU',
  ENG = 'ENG',
}

const LangSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Lang>(Lang.ENG);

  const handleChange = (value: Lang) => {
    setSelectedValue(value);
    handleToggle();
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.select}>
      <div
        className={cn(styles.selectHeader, {
          [styles.selectHeaderActive]: isOpen,
        })}
        onClick={handleToggle}
      >
        {selectedValue}
      </div>
      <div
        className={cn(styles.selectBody, {
          [styles.selectBodyActive]: isOpen,
        })}
      >
        <div
          className={styles.selectOption}
          onClick={() =>
            handleChange(
              selectedValue === Lang.ENG ? Lang.UA : selectedValue === Lang.UA ? Lang.RU : Lang.ENG
            )
          }
        >
          {selectedValue === Lang.ENG
            ? Lang.UA
            : selectedValue === Lang.UA
              ? Lang.RU
              : Lang.ENG}
        </div>
        <div
          className={styles.selectOption}
          onClick={() =>
            handleChange(
              selectedValue === Lang.ENG ? Lang.RU : selectedValue === Lang.RU ? Lang.UA : Lang.ENG
            )
          }
        >
          {selectedValue === Lang.ENG
            ? Lang.RU
            : selectedValue === Lang.RU
              ? Lang.UA
              : Lang.ENG}
        </div>
      </div>
    </div>
  );
};

export default LangSelect;
