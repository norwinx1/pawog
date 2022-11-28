import styles from './pineapple.module.css';

export default function Pineapple() {
  return (
    <div className={styles.container}>
      <div className={styles.pineapple}>
        <div className={styles.leaf}></div>
        <div className={styles.legLeft}></div>
        <div className={styles.legRight}></div>
        <div className={styles.eyeLeft}></div>
        <div className={styles.eyeRight}></div>
        <div className={styles.mouth}></div>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
}
