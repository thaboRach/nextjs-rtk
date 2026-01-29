'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Nav.module.scss';

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <Link className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} href="/">
        Home
      </Link>
      <Link
        className={`${styles.link} ${pathname === '/verify' ? styles.active : ''}`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${pathname === '/quotes' ? styles.active : ''}`}
        href="/quotes"
      >
        Quotes
      </Link>
      <Link className={`${styles.link} ${pathname === '/chat' ? styles.active : ''}`} href="/chat">
        Chat
      </Link>
    </nav>
  );
};
