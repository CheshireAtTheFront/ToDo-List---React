import React from "react";

export const TaskTodo = ({
  id,
  value,
  status,
  deleteTask,
  toggleTask,
  // setEditTodo,
  btnChange,
  editTodo,
  editingText,
  setEditingText,
  todoEdit,
}) => {
  return (
    <section className="section" key={id}>
      <div className="container">
        <div className="block container__block">
          <input
            type={"checkbox"}
            className="block__checkbox"
            onClick={() => toggleTask(id)}
            defaultChecked={status}
          />
          {editTodo === id ? (
            <img
              src={process.env.PUBLIC_URL + "/image/checkmark1_80840.svg"}
              alt="change"
              className="block__icon-change"
              onClick={() => todoEdit(id)}
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/image/pencil.svg"}
              alt="pencil"
              className="block__icon-pencil"
              onClick={() => btnChange(id)}
              // onClick={() => setEditTodo(id)}
            />
          )}

          {editTodo === id ? (
            <input
              type="text"
              value={editingText}
              style={
                status
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              className="block__text"
              onChange={(e) => setEditingText(e.target.value)}
            />
          ) : (
            <p
              style={
                status
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              className="block__text"
            >
              {value}
            </p>
          )}

          <img
            src={process.env.PUBLIC_URL + "/image/basket.svg"}
            alt="basket"
            onClick={() => deleteTask(id)}
            className="block__btn-basket"
          />
        </div>
      </div>
    </section>
  );
};
