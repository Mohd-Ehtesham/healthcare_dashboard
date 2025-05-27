import { NavLink } from "react-router-dom";
import { tools } from "../../data/tools";

import styles from "./Tools.module.css";

export default function Tools() {
  return (
    <div className={styles.wrapper}>
      <p className={`${styles.upperMargin} ${styles.disabled}`}>Tools</p>
      {tools.map((navlink) => (
        <NavLink
          key={navlink.label}
          className={`${styles.group} ${styles.disabled} ${styles.navLink}`}
        >
          <navlink.icon className={styles.icon} />
          <span>{navlink.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
