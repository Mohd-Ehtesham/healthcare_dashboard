import styles from "./Activity.module.css";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

export default function Activity() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Activity</h2>
        <p className={styles.subtitle}>3 appointment on this week</p>
      </div>
      <div className={styles.chart}>
        {days.map((day, index) => (
          <div key={index} className={styles.dayColumn}>
            <div className={styles.bars}>
              <div className={`${styles.bar} ${styles.barCyan}`}></div>
              <div className={`${styles.bar} ${styles.barIndigo}`}></div>
              <div className={`${styles.bar} ${styles.barGray}`}></div>
            </div>
            <span className={styles.margin}>{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
