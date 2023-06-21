import React, { useState } from "react";

import "./ExpenseItem.scss";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
