'use client'

import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import LangSelect from "../LangSelect/LangSelect";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";
import MobileButton from "../ui/MobileButton/MobileButton";
import BurgerIcon from "../ui/Icons/BurgerIcon/BurgerIcon";
import PhoneIcon from "../ui/Icons/PhoneIcon/PhoneIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={styles.header}
    >
      <div className={styles.headerContainer}>
        <div className={cn(styles.headerWrapper, { [styles.isOpen]: isMenuOpen })}>
          <Link href={'/'} className={styles.logo}>
            <Image
              src="/images/logo.svg"
              width={60}
              height={30.5}
              alt="logo"
            />
          </Link>
          <div className={styles.menuWrapper}>
            <span className={styles.title}>For ukrainians</span>
            <NavBar />
            <LangSelect />
          </div>
        </div>
        <div className={styles.mobileTopBarWrapper}>
          <MobileButton>
            <PhoneIcon />
          </MobileButton>
          <MobileButton>
            <Link href={'/'} className={styles.logoMobile}>
              <Image
                src="/images/logo.svg"
                width={60}
                height={30.5}
                alt="logo"
              />
            </Link>
          </MobileButton>
          <MobileButton onClick={toggleMenu} isActive={isMenuOpen}>
            <BurgerIcon isActive={isMenuOpen} />
          </MobileButton>
        </div>
      </div>
    </header>
  )
}

export default Header;
