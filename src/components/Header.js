import React from "react";
import { Buttons } from "./Buttons";

export const Header = (props) => {
  return (
    <section className="section section-title">
      <div className="section-title__container">
        <div className="section-title__block">
          <h1 className="title">Todo List</h1>
        </div>
        <Buttons setDone={props.setDone} />
      </div>
    </section>
  );
};
