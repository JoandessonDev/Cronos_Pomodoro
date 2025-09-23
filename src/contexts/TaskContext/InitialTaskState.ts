import type { TaskStateModel } from "../../Models/TaskStateModel";

export const initialTaskState : TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '21:45',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25, 
        shortBreakTime: 5,
        longBreakTime: 15
    }
};
