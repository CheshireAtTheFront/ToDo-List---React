import React from "react";

export const InputTodo = () => {
  return (
    <div className="section">
      <div className="container">
        <input
          type="text"
          name="value"
          placeholder="Добавить задачу..."
          className="input"
        />
        <button className="add-button">Добавить</button>
      </div>
    </div>
  );
};
