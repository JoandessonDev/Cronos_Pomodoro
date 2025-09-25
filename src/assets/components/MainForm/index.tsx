import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../../Models/TaskModel";
import { useTaskContext } from "../../../contexts/TaskContext/useTaskContex";

export function MainForm() {
  const {state, setState} = useTaskContext();
  const taskInput = useRef<HTMLInputElement>(null);
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    
    if (taskInput.current === null)  return;

    const taskName = taskInput.current.value.trim();
    if (!taskName){
      alert('Digite o nome da tarefa.');
      return;
    }

    const newTask : TaskModel = {
      id: Date.now.toString(),
      name: taskName,
      startdate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime'
    }
    const secondsRemaining = newTask.duration * 60;
    setState(prevState => {
     return{
       ...prevState, 
       config: {...prevState.config},
       activeTask: newTask,
       currentCycle: 1, //conferir
       secondsRemaining,
       formattedSecondsRemaining: '00:00',
       tasks: [...prevState.tasks, newTask]
    }  
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
            ref={taskInput}
          />
        </div>
        <div className="formRow">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="formRow">
          <Cycles />
        </div>
        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>

        <div className="formRow"></div>
      </form>
    </>
  );
}
