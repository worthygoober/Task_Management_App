import { createContext, useContext, useReducer, ReactNode } from "react";
import { Task } from "../types/types";

// Define action types
type TaskAction = 
    | { type: 'ADD_TASK', payload: Task }
    | { type: 'DELETE_TASK', payload: string }
    | { type: 'UPDATE_TASK', payload: { id: string; updatedTask: Partial<Task> } };

// Define state shape
interface TaskState {
    tasks: Task[];
}

// Initial state
const initialState: TaskState = {
    tasks: [],
};

// Reducer function to manage state updates
const taskReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'UPDATE_TASK':
            return { ...state, tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task ), };
        case 'DELETE_TASK':
            return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

// Define the context type
interface TaskContextType extends TaskState {
    dispatch: React.Dispatch<TaskAction>;
}

// Create the context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
    children: ReactNode;
}

// Provider component
export const TaskProvider: React.FC<TaskProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(taskReducer,initialState);

    return (
        <TaskContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
};

// Custom hook for accessing the context
export const useTaskContext = (): TaskContextType => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error ('useTaskContext must be used with a TaskProvider');
    }
    return context;
};