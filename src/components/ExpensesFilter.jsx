import "./ExpensesFilter.css";

const ExpensesFilter = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <div className="expenses-filter">
      <label>Filter By Year:</label>
      <select
        value={selectedYear}
        onChange={(event) => {
          setSelectedYear(event.target.value);
        }}
      >
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
