import styles from "./styles.module.css";
import { useTaskContext } from "../../../contexts/TaskContext/useTaskContex";
import { getNextCycle } from "../../../utils/getNextCycle";
import { getNextCycleType } from "../../../utils/getNextCycleType";

export function Cycles() {
  const { state } = useTaskContext();
  const cycleSteps = Array(state.currentCycle).fill(null);

  const cycleDescriptionMap = {
    workTime: "foco",
    shortBreakTime: "descanço curto",
    longBreakTime: "descanço longo",
  };

  console.log(cycleSteps);
  return (
    <div className={styles.cycles}>
      <span>Cycles</span>
      <div className={styles.cycleDots}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
            key={`${nextCycleType}_${nextCycle}`}
              aria-label={`Indicador de ciclo ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo ${cycleDescriptionMap[nextCycleType]}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
