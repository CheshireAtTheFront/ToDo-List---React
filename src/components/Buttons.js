import React from "react";

export const Buttons = (props) => {
  return (
    <div className="block-buttons">
      <button
        className="block-buttons__btn"
        onClick={() => props.setDone("All")}
      >
        Все
      </button>
      <button
        className="block-buttons__btn"
        onClick={() => props.setDone("Activ")}
      >
        Активные
      </button>
      <button
        className="block-buttons__btn"
        onClick={() => props.setDone("Completes")}
      >
        Выполненные
      </button>
    </div>
  );
};
