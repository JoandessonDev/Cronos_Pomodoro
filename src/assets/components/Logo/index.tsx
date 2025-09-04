import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return (
    <>
      <div>
        <a href="#" className={styles.logo}>
          <TimerIcon/>
          <h1>Chronos</h1>
        </a>
      </div>
    </>
  );
}
