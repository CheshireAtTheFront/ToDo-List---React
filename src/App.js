import { useState } from "react";
import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { TaskTodo } from "./components/TaskTodo";

function App() {
  // изменение задач
  const [input, setInput] = useState("");
  // добавление задач
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [done, setDone] = useState("");

  // изменение задач по id элемента
  const [editTodo, setEditTodo] = useState(null);
  // отследить измененный текст
  const [editingText, setEditingText] = useState("");

  // копия хука, чтобы изменения были возратными
  let copiTasks = tasks;

  // добавление задач в массив
  const addTask = () => {
    // Объект задачи
    const taskTodo = {
      // рандомное id
      id: Math.random(),
      // значение инпута
      value: input,
      // состояние
      status: false,
    };

    // добавить новый объект задачи в массив к текущим объектам задач
    let newTask = [taskTodo, ...tasks];
    setTasks(newTask);
    setInput("");
    localStorage.setItem("todoList", JSON.stringify(newTask));
  };

  // удаление задач
  const deleteTask = (id) => {
    let del = tasks.filter((item) => item.id !== id);
    setTasks(del);
    localStorage.setItem("todoList", JSON.stringify(del));
  };

  // переключение задач
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

  // изменение задач
  const todoEdit = (id) => {
    // перебор элементов списка, изменения значения выбранного списка
    const updateTodos = copiTasks.map((item) => {
      return item.id === id ? { ...item, value: editingText } : { ...item };
    });
    setTasks(updateTodos);
    setEditTodo(null);
    setEditingText("");
    localStorage.setItem("todoList", JSON.stringify(updateTodos));
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
        <InputTodo addTask={addTask} input={input} setInput={setInput} />
        {taskTodoList}
      </main>
    </div>
  );
}

export default App;
