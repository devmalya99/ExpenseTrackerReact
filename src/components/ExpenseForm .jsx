
import React from 'react'

const ExpenseForm  = () => {
  return (
    <div className='form-container'>
        <form className='form'>
        <label for='title'>Expense Title:</label>
        <input type='text' id='title' placeholder='Please add Expense Title'/>
        
        <label for='amount'>Amount</label>
        <input type='number' id='amount' min="0.01" step="0.01" placeholder='Expense Amount'/>
        
        <label for='date'></label>
        <input  type='date' min="2019-01-01" max="2024-12-31" id='date'/>

        <div className='new-expense'>
        <button type='submit'>Add</button>
        </div>

        </form>
      
    </div>
  )
}


export  default  ExpenseForm;