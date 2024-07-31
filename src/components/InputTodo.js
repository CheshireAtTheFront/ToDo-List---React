import React from "react";

export const InputTodo = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="block container__block">
          <input
            type="text"
            name="value"
            placeholder="Добавить задачу..."
            className="block__input"
            value={props.todo}
            onChange={(e) => props.setTodo(e.target.value)}
          />
          <button
            className={!props.todo.trim() ? "block__add-button" : "active"}
            onClick={() => (props.todo.trim() ? props.addTask() : false)}
            // disabled={!props.todo}
          >
            Добавить
          </button>
        </div>
      </div>
    </section>
  );
};
