import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseItem=(props) => {
  const [title,setTitle]=useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickTitleHandler = () => {
    setTitle('Updated');
  }

  const clickAmountHandler = () => {
    setAmount(100);
  }

 return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3>{title}</h3>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickTitleHandler} aria-label={`Change title of ${props.title} expense`}>Change Title</button>
      <button onClick={clickAmountHandler} aria-label={`Change amount of ${props.title} expense to $100`}>Change to $100</button>
    </Card>
  );
}

export default ExpenseItem;