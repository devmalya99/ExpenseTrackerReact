import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";


const ExpenseItem=(props) =>
{
  const [title,setTitle]=useState(props.title);
  const clickHandler=()=>
  {
    setTitle('Updated');
  }

 return (
    <Card className="expense-item">

  <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h3>{title}</h3>
        <div className="expense-item_price">${props.amount}</div>
      {/* <div className="expense-item_location">{LocationOfExpenditure}</div> */}
      </div>
      <button onClick={clickHandler} >change item</button>
    </Card>
  );
}

export default ExpenseItem;
