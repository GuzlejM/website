import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About Us</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;