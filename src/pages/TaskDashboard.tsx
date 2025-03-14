import { useContext } from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

const TaskDashboard = () => {
    const { tasks, dispatch } = useTaskContext();

    return (
        <>
        <div>
            <h1>Task Dashboard</h1>
            <TaskForm />
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} dispatch={dispatch} />
                    ))}
                </ul>
            )}
        </div>
        </>
    );
};

export default TaskDashboard;