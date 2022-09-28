import React, { useState } from "react";
import Header from './Components/Header';
import Tasks from "./Components/Tasks";
import Task from "./Components/Task";
import AddTask from "./Components/AddTask";
import './style.css';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false
  }])

  //Deletes Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }
  //Toggle Reminder
  const toggleReminder = (id) => {
    //setTask(tasks,tasks.map((task)=> task.id === id ? task.reminder = !task.reminder: null))
    setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  //add task

  const addTask = (task) => {
    console.log(tasks[tasks.length - 1].id + 1);
    let id = tasks[tasks.length - 1].id + 1;
    const taskElement = { id, ...task };
    setTask([...tasks, taskElement])
  }
  console.log("showAddTask:"+showAddTask);
  return (
    <>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : <div className="task"><h3>No tasks to show</h3></div>}
    </>
  )
}


export default App