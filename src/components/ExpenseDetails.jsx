import React from "react";

const ExpenseDetails = () => {
  return (
    <div className="expense-item">
      <div className="expense-date">date</div>
      <div className="expense-item__description">
        <h2>title</h2>
        <div className="expense-item__price">$ price</div>
      </div>
    </div>
  );
};

export default ExpenseDetails;
