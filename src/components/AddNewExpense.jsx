import "./AddNewExpense.css";

const AddNewExpense = () => {
  const thisYear = new Date().getFullYear();
  const minDate = thisYear - 2 + "-01-01";
  const maxDate = `${thisYear + 2}-12-31`;
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input required placeholder="Title" />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input required type="date" min={minDate} max={maxDate} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewExpense;
