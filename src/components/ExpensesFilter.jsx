import "./ExpensesFilter.css";

const ExpensesFilter = ({ years }) => {
  return (
    <div className="expenses-filter">
      <label>Filter By Year:</label>
      <select>
        {years.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
