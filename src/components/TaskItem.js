import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSave = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div className="list-group-item">
      {isEditing ? (
        <div>
          <input type="text" name="title" value={editedTask.title} onChange={handleEditChange} />
          <textarea name="description" value={editedTask.description} onChange={handleEditChange}></textarea>
          <input type="date" name="dueDate" value={editedTask.dueDate} onChange={handleEditChange} />
          <select name="status" value={editedTask.status} onChange={handleEditChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleSave} className="btn btn-success btn-sm">Save</button>
          <button onClick={() => setIsEditing(false)} className="btn btn-secondary btn-sm">Cancel</button>
        </div>
      ) : (
        <div>
          <h5>{task.title}</h5>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setIsEditing(true)} className="btn btn-primary btn-sm">Edit</button>
          <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm">Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;