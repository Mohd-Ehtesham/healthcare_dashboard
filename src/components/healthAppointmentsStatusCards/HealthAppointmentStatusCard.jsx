import { healthAppointments } from "../../data/healthAppointments";

import styles from "./HealthAppointmentStatusCard.module.css";

export default function HealthAppointmentStatusCard() {
  const healthCards = healthAppointments.slice(0, 3);
  return (
    <div className={styles.wrapper}>
      {healthCards.map(({ emoji, title, date, color, progress }) => (
        <div key={title} className={styles.container}>
          <div className={styles.subGroup}>
            <span className={styles.emoji}>{emoji}</span>
            <span className={styles.title}>{title}</span>
          </div>
          <p className={styles.date}>Date: {date}</p>
          <progress
            value={progress}
            max={100}
            className={styles.progressBar}
            style={{ "--progress-color": color }}
          ></progress>
        </div>
      ))}
      <span className={styles.lowerText}>Details &rarr;</span>
    </div>
  );
}
