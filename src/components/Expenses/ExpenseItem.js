import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";


const ExpenseItem=(props) =>
{


 return (
    <Card className="expense-item">

  <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h3>{props.title}</h3>
        <div className="expense-item_price">${props.amount}</div>
      {/* <div className="expense-item_location">{LocationOfExpenditure}</div> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;
