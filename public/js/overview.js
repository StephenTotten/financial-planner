const tbody = document.querySelector('#checkbookForm table tbody');
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/checkbook');
  const data = await response.json();
  const html = data.map(row => `<tr>${createCells(row)}</tr>`).join('');
  tbody.innerHTML = html;
});

function createCells(cells) {
  return `<td>${cells.category}</td>
  <td>${cells.description}</td>
  <td>$ ${cells.amount}</td>
  `;
};

async function newFormInput(event) {
  event.preventDefault();

  const amount = document.querySelector('#amountCheckbook').value;
  const description = document.querySelector('#descriptionCheckbook').value;
  const category = document.querySelector('select').value;

  const response = await fetch(`/api/checkbook`, {
    method: 'POST',
    body: JSON.stringify({
      category,
      description,
      'amount': +amount,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const item = await response.json();
    console.log(item);
    const html = `<tr>${createCells(item)}</tr>`;
    tbody.innerHTML += html;

  } else {
    alert('Failed to add checkbook input');
  }
}

document.querySelector('#checkbookForm').addEventListener('submit', newFormInput);
