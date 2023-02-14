const addIncomeBtn = document.querySelector('#addIncome');
const addExpenseBtn = document.querySelector('#addExpense');

function addIncome() {
    const amountInput = document.querySelector('#amountCheckbook');
    const descriptionInput = document.querySelector('#descriptionCheckbook');
    const categorySelect = document.querySelector('select');

    const amount = amountInput.value;
    const description = descriptionInput.value;
    const category = categorySelect.value;

    const newIncome = {
        type: 'income',
        amount: amount,
        description: description,
        category: category
    };

    // Get list of incomes from localStorage
    // Add new income to the list
    // Save the updated income list to localStorage
    const incomeList = JSON.parse(localStorage.getItem('incomes')) || [];
    incomeList.push(newIncome);

    // Save updated list to localStorage
    localStorage.setItem('incomes', JSON.stringify(incomeList));
};

function addExpense() {
    const amountInput = document.querySelector('#amountCheckbook');
    const descriptionInput = document.querySelector('#descriptionCheckbook');
    const categorySelect = document.querySelector('select');

    const amount = amountInput.value;
    const description = descriptionInput.value;
    const category = categorySelect.value;

    const newIncome = {
        type: 'expense',
        amount: amount,
        description: description,
        category: category
    };


    const expenseList = JSON.parse(localStorage.getItem('expenses')) || [];
    incomeList.push(newIncome);

    localStorage.setItem('expenses', JSON.stringify(incomeList));
};

addIncomeBtn.addEventListener('click', addIncome);
addExpenseBtn.addEventListener('click', addExpense);



// Get the saved incomes and expenses from localStorage
const incomeList = JSON.parse(localStorage.getItem('incomes')) || [];
const expenseList = JSON.parse(localStorage.getItem('expenses')) || [];


function generateTableRow(data) {
    return `
    <tr>
      <td>${data.type}</td>
      <td>${data.category}</td>
      <td>${data.description}</td>
      <td>"$" + ${data.amount}</td>
     
    </tr>
  `;
}

// Generate HTML markup for the combined table
let table = `
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Type</th>
        <th scope="col">Category</th>
        <th scope="col">Description</th>
        <th scope="col">$ Amount</th>
      </tr>
    </thead>
    <tbody>
  `;
incomeList.forEach(income => {
    table += generateTableRow(income);
});
expenseList.forEach(expense => {
    table += generateTableRow(expense);
});
table += `
    </tbody>
  </table>
`;

document.querySelector('.table-container').innerHTML = table;
