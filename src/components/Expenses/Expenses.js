import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "../YearFilter/ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const expensesByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={expensesByYear} />
        <ExpensesList items={expensesByYear} />
      </Card>
    </li>
  );
}

export default Expenses;
