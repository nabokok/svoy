import Link from "next/link";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link href="/" className={styles.navLink}>Catalog</Link>
      <Link href="/" className={styles.navLink}>Buy</Link>
      <Link href="/" className={styles.navLink}>Sell</Link>
      <Link href="/" className={styles.navLink}>Blog</Link>
      <Link href="/" className={styles.navLink}>About</Link>
      <Link href="/" className={styles.navLink}>Services</Link>
      <Link href="/" className={styles.navLink}>Contact</Link>
    </nav>
  )
}

export default NavBar;