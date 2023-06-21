import React, { useState } from "react";
import "./NewExpense.scss";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const editingHandler = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      ) : (
        <button onClick={editingHandler}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
