import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// получение блока root из index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
// здесь рендериться(выводит) компонент app
root.render(<App />);
