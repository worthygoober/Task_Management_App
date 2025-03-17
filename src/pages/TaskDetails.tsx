import React from "react";
import { useTaskContext } from "../context/TaskContext";
import { useParams } from "react-router-dom";
import { Task} from "../types/types";
import { Link } from "react-router-dom";

const TaskDetails: React.FC = () => {
    const { tasks, } = useTaskContext();
    const { id } = useParams();
    const task = tasks.find((task: Task) => task.id === id);
    
    if (!task) {
        return (
            <div>
                Task not found.
                <Link to={'/'}>Return to Dashboard</Link>
            </div>
        );
    } ;

    return (
        <>
        <div>
            <h1>Task Dashboard</h1>
            <h3>{task.title}</h3>
            <p>Task #{task.id}</p>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Created: {new Date(task.createdAt).toLocaleString()}</p>
            <p>Last updated: {new Date(task.updatedAt).toLocaleString()}</p>
            <Link to={'/'}>Return to Dashboard</Link>
        </div>
        </>
    )
};

export default TaskDetails;