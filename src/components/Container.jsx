import "./Container.css";
import ExpenseDetails from "./ExpenseDetails";

const Container = ({ data }) => {
  return (
    <div className="expenses">
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
