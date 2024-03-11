import React, { useState } from 'react';
import EditTask from '../EditTask/EditTask';
import ViewTask from '../ViewTask/ViewTask';
import DeleteTask from '../DeleteTask/DeleteTask';

const TaskList = ({setTasks, taskList, setCount, count, setSelectedTask}) => {

  const [isViewTaskOpen, setIsViewTaskOpen] = useState(false);

  const handleViewTaskChange = (value) => {
    setIsViewTaskOpen(value);
  };


	return (
    <>
    {taskList.map((task, index) => (
      <div key={index} className="task-card mt-3 ms-1">
        <div className="card-body">
          <h3 className="card-title">Task name: {task.name}</h3>
          <p className="card-text">Task description: {task.description}</p>
          <p className="card-text">Task owner: {task.owner}</p>
          <p className="card-text">Assigned User: {task.assignedUser}</p>
        </div>
        <div className="mt-3">
          <ViewTask  task={task} setSelectedTask={setSelectedTask} onViewTaskChange={handleViewTaskChange}/>
          <EditTask setTasks={setTasks} taskList={taskList} task={task} isViewTaskOpen={isViewTaskOpen}/>
          <DeleteTask setTasks={setTasks} taskList={taskList} task={task} setCount={setCount} count={count}/>
        </div>
        </div>
      ))}
    </>
  )
}

export default TaskList;