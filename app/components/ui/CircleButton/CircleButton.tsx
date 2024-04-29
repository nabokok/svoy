'use client'

import React, { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './CircleButton.module.css';

interface Props {
  children: ReactNode;
}

const CircleButton = ({ children }: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const updateButtonTransform = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    const text = textRef.current;

    if (button !== null && text !== null) {
      const rect = button.getBoundingClientRect();
      const mouseX = event.clientX - rect.left - rect.width / 2;
      const mouseY = event.clientY - rect.top - rect.height / 2;


      gsap.to([button, text], {
        x: mouseX * 0.3,
        y: mouseY * 0.3,
        duration: 0.3,
        ease: 'power1.out',
      });
    }
  };

  const resetButtonTransform = () => {
    const button = buttonRef.current;
    const text = textRef.current;

    if (button !== null && text !== null) {
      gsap.to([button, text], {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power1.out',
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      className={styles.circleButton}
      onMouseMove={updateButtonTransform}
      onMouseLeave={resetButtonTransform}
    >
      <div ref={textRef} className={styles.textWrapper}>
        {children}
      </div>
    </button>
  );
}

export default CircleButton;
