import React from "react";

export const TaskTodo = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="block container__block" key={props.id}>
          <input
            type={"checkbox"}
            className="block__checkbox"
            onClick={() => props.toggleTask(props.id)}
            defaultChecked={props.status}
          />
          <p
            style={
              props.status
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
            className="block__text"
          >
            {props.value}
          </p>
          <img
            src={"img/basket.svg"}
            alt="basket"
            onClick={() => props.deleteTask(props.id)}
            className="block__btn-basket"
          />
          {/* <button
            className="block__btn-basket"
            onClick={() => props.deleteTask(props.id)}
          >
            
          </button> */}
        </div>
      </div>
    </section>
  );
};
