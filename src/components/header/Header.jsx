import { Search } from "lucide-react";
import { IoNotifications } from "react-icons/io5";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchWrapper}>
        <Search className={styles.icon} />
        <input type="search" placeholder="Search" className={styles.input} />
        <IoNotifications className={styles.iconRight} />
      </div>
    </header>
  );
}
