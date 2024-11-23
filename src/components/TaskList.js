import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <div className="list-group">
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;