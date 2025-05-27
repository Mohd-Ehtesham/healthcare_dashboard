import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import UpcomingSchedule from "../upcomingSchedule/UpcomingSchedule";
import { calendarAppointment } from "../../data/calendarAppointment";

import styles from "./Calendar.module.css";

export default function Calendar() {
  return (
    <div>
      <div className={styles.container}>
        <span className={`${styles.h2} ${styles.color}`}>October 2021</span>
        <div className={styles.row}>
          <FaLongArrowAltLeft />
          <FaLongArrowAltRight />
        </div>
      </div>

      <div className={styles.boxContainer}>
        {calendarAppointment.map(
          ({
            day,
            date,
            appointmentFirst,
            appointmentSecond,
            appointmentThird,
          }) => (
            <div
              className={`${styles.mainContainer} ${
                day === "Tues" ? styles.highlight : ""
              }`}
              key={day + date}
            >
              <p className={styles.color}>{day}</p>
              <p className={`${styles.h2} ${styles.color}`}>{date}</p>
              <p
                className={
                  (day === "Sat" && appointmentFirst === "12:00") ||
                  (day === "Sun" && appointmentFirst === "09:00")
                    ? `${styles.color} ${styles.firstAppointmentHighlight}`
                    : styles.color
                }
              >
                {appointmentFirst}
              </p>
              <p
                className={
                  day === "Tues" && appointmentSecond === "09:00"
                    ? `${styles.color} ${styles.secondAppointmentHighlight}`
                    : day === "Thurs" && appointmentSecond === "11:00"
                    ? `${styles.color} ${styles.firstAppointmentHighlight}`
                    : styles.color
                }
              >
                {appointmentSecond}
              </p>
              <p className={styles.color}>{appointmentThird}</p>
            </div>
          )
        )}
      </div>

      <div className={styles.mergeContainer}>
        <div className={styles.cardBlue}>
          <div className={styles.vertical}>
            <span className={`${styles.leftText} ${styles.marginBottom}`}>
              Dentist
            </span>
            <span className={styles.leftText}>09:00 - 11:00</span>
            <span className={styles.leftText}>Dr. Cameron Williamson</span>
          </div>
          <div>
            <p className={styles.icon}>🦷</p>
          </div>
        </div>

        <div className={styles.cardPurple}>
          <div className={styles.vertical}>
            <span className={`${styles.leftText} ${styles.marginBottom}`}>
              Physiotherapy Appointment
            </span>
            <span className={styles.leftText}>11:00 - 12:00</span>
            <span className={styles.leftText}>Dr. Kevin Djones</span>
          </div>
          <div>
            <p className={styles.icon}>💪</p>
          </div>
        </div>
      </div>

      <UpcomingSchedule />
    </div>
  );
}
