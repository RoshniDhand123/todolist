import Form from"./comp/Form";
import React,{useState} from'react';
import './App.css';
import { nanoid } from "nanoid";
import FilterButton from "./comp/FilterButton";
import Todo from "./comp/Todo";
import './comp/Form.css';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
     
      if (id === task.id) {
      
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    const newTask = 
    { 
      id: "todo-" + nanoid(),
      name: name,
      completed: false
   };
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <Form  addTask={addTask} />
     <div  style={{marginLeft:"70px",marginTop:"20px"}}>{filterList}</div>
     <h2  style={{marginLeft:"100px"}}>{taskList.length} task Remaining</h2>
     <ul  style={{marginLeft:"100px"}}>{taskList}</ul>

    
    
     
    </div>
  );
}

export default App;


