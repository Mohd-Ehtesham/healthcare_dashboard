import Activity from "../activity/Activity";
import HealthAppointmentStatusCard from "../healthAppointmentsStatusCards/HealthAppointmentStatusCard";
import HumanCard from "../humanCard/HumanCard";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.mainGroup}>
      <div className={styles.subGroup}>
        <h1 className={styles.text}>Dashboard</h1>
        <select defaultValue="this-week" className={styles.customSelect}>
          <option value="this-week">This Week</option>
          <option value="last-week">Last Week</option>
          <option value="this-month">This Month</option>
          <option value="last-month">Last Month</option>
        </select>
      </div>
      <div className={styles.group}>
        <HumanCard />
        <HealthAppointmentStatusCard />
      </div>
      <div>
        <Activity />
      </div>
    </div>
  );
}
