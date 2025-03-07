import { useState } from "react";
import "./AddNewExpense.css";

const AddNewExpense = () => {
  const thisYear = new Date().getFullYear();
  const minDate = thisYear - 2 + "-01-01";
  const maxDate = `${thisYear + 2}-12-31`;
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  const handelInputChange = ({ target }) => {
    const { name, value } = target;
    setInputs({ ...inputs, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              name="title"
              onChange={handelInputChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              step="0.01"
              name="price"
              onChange={handelInputChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min={minDate}
              max={maxDate}
              name="date"
              onChange={handelInputChange}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewExpense;
