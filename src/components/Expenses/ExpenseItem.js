import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";


const ExpenseItem=(props) =>
{
  const deleteExp=()=>
  {
        
  }

 return (
    <Card className="expense-item">

  <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h3>{props.title}</h3>
        <div className="expense-item_price">${props.amount}</div>
      {/* <div className="expense-item_location">{LocationOfExpenditure}</div> */}
      </div>
      <button onClick={deleteExp} className="delButton">Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
