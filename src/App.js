import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./index.css";
import Form from "./components/ExpenseForm ";
import Expenses from "../src/components/NewExpense/NewExpense";
import NewExpense from "../src/components/NewExpense/NewExpense";
const App=()=> {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <NewExpense />
      <div className="expense-items-container">
        <Form/>
        {expenses.map((expense, index) => 
          <ExpenseItem 
            key={index}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
          />
        )}
      </div>
    </div>
  );
}

export default App;