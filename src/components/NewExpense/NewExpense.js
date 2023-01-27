import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

  const addNewExpenseHandler = () => {
    setAddExpense(true);
  };

  const cancelNewExpenseHandler = () => {
    setAddExpense(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  };

  if (addExpense === false) {
    return (
      <div className="new-expense">
        <button onClick={addNewExpenseHandler}> Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelNewExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
