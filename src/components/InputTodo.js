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
            value={props.input}
            onChange={(e) => props.setInput(e.target.value)}
          />
          <button
            className={!props.input ? "block__add-button" : "active"}
            onClick={() => (props.input.trim() ? props.addTask() : false)}
          >
            Добавить
          </button>
        </div>
      </div>
    </section>
  );
};
