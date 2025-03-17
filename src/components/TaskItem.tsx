import React from "react";
import { useState } from "react";
import { Task } from "../types/types";
import TaskForm from "./TaskForm";
import { useTaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const { dispatch } = useTaskContext();
    const [isEditing, setIsEditing] = useState(false); // sets editing state to false by default


    const handleDelete = () => {
        dispatch({ type: 'DELETE_TASK', payload: task.id });
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'UPDATE_TASK', payload: { id: task.id, updatedTask: {status: e.target.value as Task['status']}},
        });
    };

    return (
        <>
        <div>
            {isEditing ? (
                <>
                    <TaskForm
                        editingTask={task}
                        setIsEditing={setIsEditing}
                    />
                    <p>Status: {''}
                        <select value={task.status} onChange={handleStatusChange} >
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </p>
                </>
            ) : (<>
                <h3>
                    <Link to={`/task/${task.id}`} style={{ textDecoration: 'none' }}>
                        {task.title}
                    </Link></h3>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
                <button onClick={() => setIsEditing(true)} >Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </>)}
        </div>
        </>
    );

};

export default TaskItem;