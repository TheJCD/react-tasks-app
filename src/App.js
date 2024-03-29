import React, { useState, useEffect } from 'react';
import AddNewTask from './components/AddNewTask/AddNewTask';
import TaskList from './components/TaskList/TaskList';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [count, setCount] = useState(0);
  const [selectedTask, setSelectedTask] = useState('No task selected');

  const updateTasks = (newTask) => {
    setTasks([...tasks, newTask]);
    setCount(count + 1);
  };

  //updating tasks in localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <Sidebar count={count} selectedTask={selectedTask} setTasks={setTasks} setCount={setCount} tasks={tasks}/>
      <div className="main">
        <AddNewTask addTask={updateTasks} />
        <TaskList setTasks={setTasks} taskList={tasks} setCount={setCount} count={count} setSelectedTask={setSelectedTask}/>
      </div>
    </>
  );
}

export default App;