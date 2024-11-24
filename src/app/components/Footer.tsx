import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <Link href="https://nextjs.org">Next.js</Link>
      <Link href="https://vercel.com">Vercel</Link>
      <Link href="/privacy-policy">Privacy Policy</Link>
      <Link href="/terms-of-service">Terms of Service</Link>
    </div>
  </footer>
);

export default Footer;