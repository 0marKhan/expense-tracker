import "./NewExpense.scss";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const newExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default newExpense;
