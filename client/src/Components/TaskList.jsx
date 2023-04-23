import React, { useState } from 'react';
import '../App.css';

function TaskList() {
    const [tasks, setTasks] = useState([
        { 
            id: 1, 
            text: 'Turn off all distractions', 
            completed: false },
        { 
            id: 2, 
            text: 'Go to beach', 
            completed: false },
        { 
            id: 3, 
            text: 'Sip on some Margs', 
            completed: false }
    ]);

    const handleCheck = (taskId) => {
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    const handleDelete = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTaskText = event.target.elements.task.value;
        if (newTaskText) {
            const newTask = { id: tasks.length + 1, text: newTaskText, completed: false };
            setTasks([...tasks, newTask]);
            event.target.reset();
        }
    };

    return (
        <div className="task-list">
            <h2>My Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed-task' : ''}>
                        <label>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleCheck(task.id)}
                            />
                            <span>{task.text}</span>
                        </label>
                        <button className="delete-btn" onClick={() => handleDelete(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <form className="add-task-form" onSubmit={handleSubmit}>
                <input type="text" name="task" className="task-input" placeholder="Enter a new task" />
                <button type="submit" className="add-btn">Add Task</button>
            </form>
        </div>
    );
}

export default TaskList;
