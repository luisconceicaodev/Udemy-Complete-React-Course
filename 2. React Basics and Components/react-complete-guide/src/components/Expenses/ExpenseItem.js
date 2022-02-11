import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  // To update the component on variable change you need to update a State
  // the state is per component occurance, even if you repeat this component more than once in a page
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => setTitle("abc");
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="">{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button /* onClick={clickHandler} executa apenas ao clicar, onClick={clickHandler()} executa onLoad */
        onClick={clickHandler}
      >
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
