import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesConst = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(expensesConst);

  const addExpenseHandler = (expense) => {
    // This is actually wrong, if you want to add to a list use the next method
    // setExpenses([...expenses, expense]);
    // prevExpenses is auto passed, name can be anything
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // Without JSX it would be like this
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(Expenses, { items: expensest })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
