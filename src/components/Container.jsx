import "./Container.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpensesFilter from "./ExpensesFilter";

const Container = ({ data }) => {
  const years = [
    "All",
    ...new Set(data.map((el) => el.date.getFullYear()).sort()),
  ];
  return (
    <div className="expenses">
      <ExpensesFilter years={years} />
      {data.map((expense) => {
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
