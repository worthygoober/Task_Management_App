import { useState, useEffect } from "react";
import React from "react";
import { Task } from "../types/types";
import { useTaskContext } from "../context/TaskContext";

interface TaskFormProps {
    editingTask?: Task | null;
    setIsEditing?: (value: boolean) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ editingTask, setIsEditing }) => {
    const { dispatch, tasks } = useTaskContext();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<Task['status']>('pending');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
            setStatus(editingTask.status);
        } else {
            setTitle('');
            setDescription('');
            setStatus('pending');
        }
    }, [editingTask]);

    useEffect(() => {
        console.log(tasks);
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim()) return; // prevents empty title submissions

        if (editingTask) {
            dispatch({ 
                type: 'UPDATE_TASK', 
                payload: { id: editingTask.id, updatedTask: { title, description, status }}, 
            });
            setIsEditing(false);

        } else {
            dispatch({ 
                type: 'ADD_TASK', 
                payload: {
                    id: Date.now().toString(),
                    title,
                    description,
                    status: 'pending',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
        }

        setTitle('');
        setDescription('');
        setStatus('pending');
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
            <input type="text" value={title} placeholder="Task title" 
                onChange={(e) => setTitle(e.target.value)} required 
            />

            <br /> <br />

            <textarea cols="40" rows="10" value={description}
                placeholder="Task Description"
                onChange={(e) => setDescription(e.target.value)}
            />

            <br />

            <button type="submit">{editingTask ? 'Update Task' : 'Add Task' }</button>

        </form>
        </>
    );
};

export default TaskForm;