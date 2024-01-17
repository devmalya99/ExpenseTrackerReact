
import React from 'react'

const ExpenseForm  = () => {
  return (
    <div className='form-container'>
        <form className='form'>
        <label for='title'>Expense Title:</label>
        <input type='text' id='title' placeholder='Please add Expense Title'/>
        
        <label for='amount'>Amount</label>
        <input type='number' id='amount' placeholder='Expense Amount'/>
        
        <label for='date'></label>
        <input  type='date' id='date'/>
        <button type='click'>Add</button>
        </form>
    </div>
  )
}

const  exTitle=document.getElementById('title');
const exAmount=document.getElementById('amount');
const exDate=document.getElementById('date');

//add event listener

exTitle.addEventListener('input', (event)=>
{
  console.log(`Title: ${event.target.value}`)
})


exAmount.addEventListener('input',(event)=>
{
    console.log(`Amount is: ${event.target.value}`)
})

export  default  ExpenseForm;