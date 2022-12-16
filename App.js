import React from 'react';
import './App.css';
import Expenses from './components/Expenses';
import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';


  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Dinning Table',
      amount: 104.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Bike',
      amount: 494.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Smart TV',
      amount: 250,
      date: new Date(2021, 5, 12),
    },
  ];

  const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // const Expens=()=>
  // {
  //   <Expenses items={expenses}/>
  // }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Full Stack Developer"),
  //   React.createElement(Expenses,{items:expenses})
             // Or below basic method can be used
             return (
              <div>
              <div>.
              <NewExpense onAddExpense={addExpenseHandler} />
                <Expenses items={expenses} />
             
                
              </div>
             
             
              </div>
            );
}

export default App;
