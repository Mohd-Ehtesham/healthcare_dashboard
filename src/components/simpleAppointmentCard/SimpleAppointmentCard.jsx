import styles from "./SimpleAppointmentCard.module.css";
export default function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>
        <span>{title}</span>
        <span className={styles.icon}>{icon}</span>
      </p>
      <p className={styles.time}>{time}</p>
    </div>
  );
}
