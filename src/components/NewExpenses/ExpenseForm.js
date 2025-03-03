import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //method 1
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
  //method 2
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // setuserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })
   
      setEnteredTitle(event.target.value);
    };


  const amountChangeHandler = (event) => {
    // setuserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })
    setEnteredAmount((prevState) => {
       setEnteredAmount (event.target.value) ;
    });
  };
  const dateChangeHandler = (event) => {
    // setuserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })
    setEnteredDate((prevState) => {
      setEnteredDate (event.target.value) 
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);

   props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2028-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};


export default ExpenseForm;
