import styles from './Verify.module.scss';

export default function VerifyPage() {
  return (
    <div className={styles.container}>
      <h1>Verify page</h1>
      <p>This page is intended to verify that Redux state is persisted across page navigations.</p>
    </div>
  );
}
