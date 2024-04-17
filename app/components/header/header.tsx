import Image from "next/image";
import Link from "next/link";
import NavBar from "../navBar/navBar";
import LangSelect from "../langSelect/langSelect";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link href={'/'}>
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
      </div>
    </header >
  )
}

export default Header;