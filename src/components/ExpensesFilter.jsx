import React from "react";

const ExpensesFilter = () => {
  return (
    <div>
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
