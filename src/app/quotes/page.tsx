import { Quotes } from '@/components/quotes/Quotes';

import styles from './Quotes.module.scss';

export default function QuotesPage() {
  return (
    <section className={styles.container}>
      <h1>Quotes page</h1>
      <p>This page is intended to showcase RTK Query.</p>
      <Quotes />
    </section>
  );
}
