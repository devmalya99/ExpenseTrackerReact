import "./ExpenseItem.css";

function ExpenseItem(props) {
 return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item_description">
        <h3>{props.title}</h3>
        <div className="expense-item_price">${props.amount}</div>
      {/* <div className="expense-item_location">{LocationOfExpenditure}</div> */}
      </div>
    </div>
  );
}

export default ExpenseItem;
