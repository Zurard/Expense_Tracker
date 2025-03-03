import './NewExpenses.css'
import './ExpenseForm.js'
import React from 'react';
import ExpenseForm from './ExpenseForm.js';

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) =>{
     const expenseData ={
         ...enteredExpenseData,
         id: Math.random().toString(),
     }
   props.onAddExpense(expenseData); 
  };


return<div className='new-expense'>
   <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>   
  {/* < the value of this attribute is a function that will be executed in the ExpenseForm.js file> */}
</div> 

}

export default NewExpenses;