import { useState } from "react";
import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { TaskTodo } from "./components/TaskTodo";

function App() {
  // изменение задач
  const [todo, setTodo] = useState("");
  // добавление задач
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [done, setDone] = useState("");

  // копия хука, чтобы изменения были возратными
  let copiTasks = tasks;

  // добавление задач в массив
  const addTask = () => {
    // Объект задачи
    const taskTodo = {
      // рандомное id
      id: Math.random(),
      // значение инпута
      value: todo,
      // состояние
      status: false,
    };
    // добавить новый объект задачи в массив к текущим объектам задач
    let newTask = [taskTodo, ...tasks];
    setTasks(newTask);
    setTodo("");
    localStorage.setItem("todoList", JSON.stringify(newTask));
  };

  // удаление задач
  const deleteTask = (id) => {
    let del = tasks.filter((e) => e.id !== id);
    setTasks(del);
    localStorage.setItem("todoList", JSON.stringify(del));
  };

  // переключение задач
  const toggleTask = (id) => {
    let toggle = tasks.map((item) =>
      item.id === id ? { ...item, status: !item.status } : { ...item }
    );
    setTasks(toggle);
    localStorage.setItem("todoList", JSON.stringify(toggle));
  };

  // переключение на выполненные и не выполненные задачи
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

  // отрисовка TaskTodo - задачи
  const taskTodoList = copiTasks.map((e) => (
    <TaskTodo
      key={e.id}
      id={e.id}
      value={e.value}
      status={e.status}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
    />
  ));

  return (
    <div className="App">
      <main className="main">
        <Header setDone={setDone} />
        <InputTodo addTask={addTask} todo={todo} setTodo={setTodo} />
        {taskTodoList}
      </main>
    </div>
  );
}

export default App;