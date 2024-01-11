import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2023,1,1);
    const expenseTitle='Food';
    const expenseAmount='545';
    const LocationOfExpenditure='Kolkata'
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item_description">
        <h3>{expenseTitle}</h3>
        <div className="expense-item_price">${expenseAmount}</div>
      <div className="expense-item_location">{LocationOfExpenditure}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
