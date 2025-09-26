import { act, useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
    children: React.ReactNode;
}
export function TaskContextProvider({children}: TaskContextProviderProps){
    const [state, setState] = useState(initialTaskState);
    useEffect(() => {
        console.log(state);
    }, [state])
    // type ActionType = {
    //     type: string;
    //     payload?: number;
    // }
    // const [myState, dispatch] = useReducer((state, action: ActionType) => {
    //     switch(action.type){
    //         case 'incrementar': {
    //             if (!action.payload) return;
    //             return {
    //                 ...state,
    //                  secondsRemaing: state.secondsRemaing + action.payload }
    //         }
    //     }
    //     return state;
    // }, {
    //     secondsRemaing: 0,
    // })
    return(
        <TaskContext.Provider value={{state, setState}}>
            {children}
            {/* <h1>O estado é {JSON.stringify(myState)}</h1>
            <button onClick={() => {dispatch({type:'incrementar', payload: 10})}}>increment 10</button> */}
        </TaskContext.Provider>
    );
}