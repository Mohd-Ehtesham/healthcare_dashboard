import { NavLink } from "react-router-dom";
import { Settings } from "lucide-react";

import styles from "./Setting.module.css";

export default function Setting() {
  return (
    <NavLink
      className={`${styles.wrapper} ${styles.disabled} ${styles.label} ${styles.navLink}`}
    >
      <Settings className={styles.icon} />
      <span>Setting</span>
    </NavLink>
  );
}
