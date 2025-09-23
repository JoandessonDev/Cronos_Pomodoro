import { createContext } from "react";
import type { TaskStateModel } from "../../Models/TaskStateModel";
import { initialTaskState } from "./InitialTaskState";

const initialContextValue = {state: initialTaskState, setState: () => {}};

type TaskContextProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}
export const TaskContext = createContext<TaskContextProps>(initialContextValue);