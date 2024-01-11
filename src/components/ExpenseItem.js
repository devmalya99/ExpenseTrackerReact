import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2023</div>
      <div className="expense-item_description">
        <h3>Food</h3>
        <div className="expense-item_price">100</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
