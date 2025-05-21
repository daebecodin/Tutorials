// const text = "Hello"; // String
// const salary = 2000; // number
// const isExpense = false; // boolean
//
// const expenses = [1000, 10, 46, 2633.82, 2736];

// const transaction = {
//     description: 'salary',
//     amount: 1243,
//     isExpense: true
// };

// function declaration
// function calculateBalanceFromIncomeAndExpense(income, expense) {
//     const balance = income - expense;
//     return "your balance is " + balance;
// }

//  function expression
// var calculateBalanceFromIncomeAndExpense = function(income, expense) {
//     const balance = income - expense;
//     return "your balance is " + balance;
// }

// arrow function
// const calculateBalanceFromIncomeAndExpense = (income, expenses) => {
//     const balance = income - expenses;
//     return "your balance is " + balance;
// }
// const calculateBalanceFromIncomeAndExpense = (income, expense) => income - expense;
// const calculateBalanceFromIncomeAndExpense = income => income - 500;

// const result1 = calculateBalanceFromIncomeAndExpense(5000);



const headingEl = document.querySelector('.first-heading');

const balanceEl = document.querySelector('.balance-number');

balanceEl.insertAdjacentHTML('beforeend','<span>1</span>')