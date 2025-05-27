import SimpleAppointmentCard from "../simpleAppointmentCard/SimpleAppointmentCard";

import styles from "./UpcomingSchedule.module.css";

export default function UpcomingSchedule() {
  return (
    <div>
      <h3 className={styles.color}>The Upcoming Schedule</h3>

      <h4 className={styles.subHeading}>On Thursday</h4>
      <div className={styles.container}>
        <SimpleAppointmentCard
          title="Health checkup complete"
          time="11:00 AM"
          icon="💉"
        />
        <SimpleAppointmentCard
          title="Ophthalmologist"
          time="14:00 PM"
          icon="👁️"
        />
      </div>

      <h4 className={styles.subHeading}>On Saturday</h4>
      <div className={styles.container}>
        <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" icon="❤️" />
        <SimpleAppointmentCard title="Neurologist" time="16:00 PM" icon="👨‍⚕️" />
      </div>
    </div>
  );
}
