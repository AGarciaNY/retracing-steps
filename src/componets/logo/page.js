
import styles from './page.module.css'

export default function Logo() {
  return (
    <div className={styles.logo_holder}>
      <div className={styles.c1}>
        <div className={styles.c2}></div>
      </div>

      <div className={styles.s1}></div>
      <h1 className={styles.LgH}>Give-A-Way</h1>
    </div>
  );
}