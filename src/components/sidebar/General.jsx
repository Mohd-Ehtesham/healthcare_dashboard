import { NavLink } from "react-router-dom";
import { navlinks } from "../../data/navlinks";
import styles from "./General.module.css";

export default function General() {
  return (
    <div className={styles.wrapper}>
      <p className={`${styles.upperMargin} ${styles.disabled}`}>General</p>
      {navlinks.map((navlink) => {
        const isDashboard = navlink.label === "Dashboard";
        const labelClass = isDashboard
          ? styles.label
          : `${styles.label} ${styles.disabled}`;
        const iconClass = isDashboard
          ? styles.icon
          : `${styles.icon} ${styles.disabled}`;

        const Icon = navlink.icon;

        return (
          <NavLink
            key={navlink.label}
            className={`${styles.group} ${styles.navLink}`}
          >
            <Icon className={iconClass} />
            <span className={labelClass}>{navlink.label}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
