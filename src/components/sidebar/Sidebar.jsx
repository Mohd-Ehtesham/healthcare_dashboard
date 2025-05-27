import Tools from "./Tools";
import General from "./General";
import Setting from "./Setting";

import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <p>
        <span className={styles.text1}>Health</span>
        <span className={styles.text2}>care.</span>
      </p>
      <div className={styles.menu}>
        <General />
        <Tools />
        <Setting />
      </div>
    </aside>
  );
}
