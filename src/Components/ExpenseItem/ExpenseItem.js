import React, { useState } from "react";

import "./ExpenseItem.scss";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  // first index has the changed title, and second a function to alter
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
