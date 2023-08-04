import { useState } from "react";
import GlobalStyle from "./assets/GlobalStyle/GlobalStyle";
import { styled } from "styled-components";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!newTask) {
      alert("Enter Task");
      return;
    }
    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };

    setTasks((oldList) => [...oldList, task]);
    setNewTask("");
  }

  function deleteTask(id) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  }

  return (
    <Container>
      <GlobalStyle />
      <Header>Todo</Header>
      <Input
        type="text"
        placeholder="enter task"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          addTask();
        }}
      >
        Add
      </Button>
      <TaskWrapper>
        {tasks.map((task) => {
          return (
            <div>
              <Task key={task.id}>
                {task.value}
                <DeleteBtn
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                >
                  X
                </DeleteBtn>
              </Task>
            </div>
          );
        })}
      </TaskWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Header = styled.h1`
  font-size: 3.5rem;
  color: white;
`;

const Input = styled.input`
  height: 2rem;
  width: 100%;
  border-radius: 2rem;
  outline: none;
  border: none;
  padding: 0.8rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 50%;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
  border: none;
`;

const TaskWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Task = styled.div`
  position: relative;
  min-width: 10rem;
  width: 100%;
  overflow: hidden;
  background-color: #dcdcdc;
  border-radius: 1rem;
  padding: 0.5rem;
`;

const DeleteBtn = styled.button`
  position: absolute;
  right: 10%;
  border-radius: 1rem;
  border: none;
  background: red;
  cursor: pointer;
  margin-left: 1rem;
`;
export default App;
