import { useState } from "react";
import "./Container.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpensesFilter from "./ExpensesFilter";
import Chart from "./Chart";

const Container = ({ data }) => {
  const years = [
    "All",
    ...new Set(data.map((el) => el.date.getFullYear()).sort()),
  ];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const data2 = data.filter((expense) => {
    return selectedYear == "All"
      ? true
      : expense.date.getFullYear() == selectedYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        years={years}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <Chart data={data2} />
      {data2.map((expense) => {
        return (
          <ExpenseDetails
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default Container;
