import { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    console.log("title: ", title);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    console.log("amount: ", amount);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    console.log("date: ", date);
  };

  // setExpense tem de ter os 3 valores, se não ficam vazios
  // eslint-disable-next-line
  const [expenseNOTUSED, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  // ...expense, title: value -> faz spread dos valores do expense e depois atualiza o title com o value
  // course teacher prefered to not use this and to instead use the one state for each variable
  // eslint-disable-next-line
  const titleChangeHandlerNOTUSED = (e) => {
    /* 
    -- Wrong way of using the previous state to update the current state
    setExpense({
      ...expense,
      title: e.target.value
    }); 
    
    */

    setExpense((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  // eslint-disable-next-line
  const amountChangeHandlerNOTUSED = (e) => {
    setExpense((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };
  // eslint-disable-next-line
  const dateChangeHandlerNOTUSED = (e) => {
    setExpense((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: date,
    };

    console.log("yo mom: ", expenseData);

    /* Clear inputs (value) on submit */
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* Não é preciso passar (e) => title(e) */}
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            /* Add state as the value */
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
