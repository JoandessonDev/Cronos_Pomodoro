import { HistoryIcon, HouseIcon, Settings, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <>
      <nav>
        <a href="#" className={styles.menu}>
          <HouseIcon/>
        </a>
         <a href="#" className={styles.menu}>
          <HistoryIcon/>
        </a>
         <a href="#" className={styles.menu}>
          <SettingsIcon/>
        </a>
         <a href="#" className={styles.menu}>
          <SunIcon/>
        </a>
      </nav>
    </>
  );
}
