import "./ExpensesFilter.css";

const ExpensesFilter = () => {
  return (
    <div className="expenses-filter">
      <label>Filter By Year:</label>
      <select>
        <option>All</option>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
