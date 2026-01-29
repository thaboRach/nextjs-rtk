import Footer from '@/components/footer/Footer';
import { Nav } from '@/components/nav/Nav';

import styles from './layout.module.scss';
import { StoreProvider } from './StoreProvider';

import type { ReactNode } from 'react';

import '@/styles/globals.scss';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />
            <main className={styles.main}>{children}</main>
            <Footer />
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
