import { useState } from "react";
import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { TaskTodo } from "./components/TaskTodo";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [done, setDone] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editingText, setEditingText] = useState("");

  let copiTasks = tasks;

  const addTask = () => {
    const taskTodo = {
      id: Math.random(),
      value: input,
      status: false,
    };

    let newTask = [taskTodo, ...tasks];
    setTasks(newTask);
    setInput("");
    localStorage.setItem("todoList", JSON.stringify(newTask));
  };

  const deleteTask = (id) => {
    let del = tasks.filter((item) => item.id !== id);
    setTasks(del);
    localStorage.setItem("todoList", JSON.stringify(del));
  };

  const toggleTask = (id) => {
    let toggle = tasks.map((item) => {
      return item.id === id ? { ...item, status: !item.status } : { ...item };
    });
    setTasks(toggle);
    localStorage.setItem("todoList", JSON.stringify(toggle));
  };

  const btnChange = (id) => {
    setEditTodo(id);

    copiTasks.map((item) => {
      return item.id === id
        ? { ...item, value: setEditingText(item.value) }
        : { ...item };
    });
  };

  const todoEdit = (id) => {
    const updateTodos = copiTasks.map((item) => {
      return item.id === id ? { ...item, value: editingText } : { ...item };
    });
    setTasks(updateTodos);
    setEditTodo(null);
    setEditingText("");
    localStorage.setItem("todoList", JSON.stringify(updateTodos));
  };

  switch (done) {
    case "All":
      copiTasks = tasks;
      break;
    case "Activ":
      copiTasks = tasks.filter((e) => e.status === false);
      break;
    case "Completes":
      copiTasks = tasks.filter((e) => e.status === true);
      break;
  }

  const taskTodoList = copiTasks.map((item, index) => {
    return (
      <TaskTodo
        key={index}
        id={item.id}
        value={item.value}
        status={item.status}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        setEditingText={setEditingText}
        editingText={editingText}
        editTodo={editTodo}
        btnChange={btnChange}
        setEditTodo={setEditTodo}
        todoEdit={todoEdit}
      />
    );
  });

  return (
    <div className="App">
      <main className="main">
        <Header setDone={setDone} />
        <div className="main-section">
          <InputTodo addTask={addTask} input={input} setInput={setInput} />
          {taskTodoList}
        </div>
      </main>
    </div>
  );
}

export default App;
