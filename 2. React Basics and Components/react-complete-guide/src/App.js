import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Equivalent to our Switcher

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 29.67, date: new Date(2021, 4, 22) },
    { title: "House Insurance", amount: 394.67, date: new Date(2021, 9, 8) },
    { title: "Life Insurance", amount: 54.67, date: new Date(2021, 11, 14) },
    { title: "Netflix Insurance", amount: 994.67, date: new Date(2021, 1, 31) },
  ];

  const addExpenseHandler = (expenses) => {
    console.log(expenses);
  };

  // JSX syntax
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

/* 
  -- How you would do it in Vanilla JS

  const para = document.createElement('p');
  para.textContent = "This is also visible";
  document.getElementById('root').append(para);

*/
