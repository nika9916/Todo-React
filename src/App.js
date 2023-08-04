import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };

    setTasks((oldList) => [oldList, task]);
    setNewTask("");
  }

  console.log(tasks);

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="enter task"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTask();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;
