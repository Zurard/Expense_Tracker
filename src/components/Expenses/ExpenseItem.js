import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react'

const ExpenseItem=(props) => {
// const expenseDate = new Date(2021, 3, 28);
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 294.67;

  const [ title , setTitle] = useState(props.title)

// let title = props.title;

  const handleClick = () => {
    setTitle('Updated');
    console.log('Updated');
  } 
  return (
    <div className="expense-item" key={props.jsjs}>
      <ExpenseDate date={props.date}/>
      <div className="expense-Item-Description">
        <h2>{title}</h2>
        <div className='Expense-item-price'>${props.amount}</div>
      </div>
      <button className="cool-button" onClick={handleClick}>
        Change Title
      </button>
    </div>
  );
}

export default ExpenseItem;
