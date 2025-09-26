import { PlayCircleIcon, StopCircle, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../../Models/TaskModel";
import { useTaskContext } from "../../../contexts/TaskContext/useTaskContex";
import { getNextCycle } from "../../../utils/getNextCycle";
import { getNextCycleType } from "../../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(state.currentCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskInput.current === null) return;

    const taskName = taskInput.current.value.trim();
    if (!taskName) {
      alert("Digite o nome da tarefa.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now.toString(),
      name: taskName,
      startdate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };
    const secondsRemaining = newTask.duration * 60;
    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
      };
    });
  }
  return (
    <>
      <form onSubmit={handleCreateNewTask} className="form">
        <div className="formRow">
          <DefaultInput
            id="myInput"
            labelText="Task"
            placeholder="Digite o nome da tarefa"
            type="text"
            disabled={!!state.activeTask}
            ref={taskInput}
          />
        </div>
        <div className="formRow">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {state.currentCycle > 0 && (
          <div className="formRow">
            <Cycles />
          </div>
        )}
        <div className="formRow">
          {!state.activeTask ? (
            <DefaultButton
              key={"btnStart"}
              aria-label="Iniciar nova tarefa"
              title="Iniciar nova tarefa"
              type="submit"
              icon={<PlayCircleIcon />}
            />
          ) : (
            <DefaultButton
              key={"btnStop"}
              aria-label="Para tarefa atual"
              title="Para tarefa atual"
              color="red"
              type="button"
              onClick={handleInterruptTask}
              icon={<StopCircleIcon />}
            />
          )}
        </div>

        <div className="formRow"></div>
      </form>
    </>
  );
}
