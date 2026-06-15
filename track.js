// track.js

const form = document.getElementById('transactionform')
const descInput = document.getElementById('desc')
const amountInput = document.getElementById('amount')
const categoryInput = document.getElementById('category')
const dateInput = document.getElementById('date')
const typeInput = document.getElementById('type')

const transactionsBody = document.getElementById('transactionsbody')
const balance = document.getElementById('balance')
const totalIncome = document.getElementById('totalincome')
const totalExpense = document.getElementById('totalexpense')
const notificationContainer = document.getElementById('notificationcontainer')

const transactions = JSON.parse(localStorage.getItem('transactions')) || []

const greetingEl = document.getElementById('greeting')
let name = localStorage.getItem('username')

if (!name) {
  name = prompt('Enter your name:')
  if (!name || name.trim() === '') name = 'Guest'
  localStorage.setItem('username', name)
}

greetingEl.textContent = `Good Morning, ${name}!`

function showNotification(message, type = 'success') {
  const notif = document.createElement('div')
  notif.className = `notification ${type}`
  notif.textContent = message
  notificationContainer.appendChild(notif)
  setTimeout(() => notif.remove(), 3000)
}

function updateUI() {
  transactionsBody.innerHTML = ''

  let income = 0
  let expense = 0

  transactions.forEach((t, index) => {
    const tr = document.createElement('tr')

    const tdDate = document.createElement('td')
    tdDate.textContent = t.date

    const tdDesc = document.createElement('td')
    tdDesc.textContent = t.description

    const tdCategory = document.createElement('td')
    tdCategory.textContent = t.category

    const tdAmount = document.createElement('td')
    const sign = t.type === 'income' ? '+' : '-'
    tdAmount.textContent = `${sign}$${Math.abs(t.amount).toFixed(2)}`
    tdAmount.classList.add(t.type)

    const tdDelete = document.createElement('td')
    const btn = document.createElement('button')
    btn.textContent = 'Delete'
    btn.classList.add('delete-btn')

    btn.addEventListener('click', () => deleteTransaction(index))

    tdDelete.appendChild(btn)

    tr.append(tdDate, tdDesc, tdCategory, tdAmount, tdDelete)
    transactionsBody.appendChild(tr)

    if (t.type === 'income') {
      income += t.amount
    } else {
      expense += t.amount
    }
  })

  balance.textContent = `$${(income - expense).toFixed(2)}`
  totalIncome.textContent = `$${income.toFixed(2)}`
  totalExpense.textContent = `$${Math.abs(expense).toFixed(2)}`

  localStorage.setItem('transactions', JSON.stringify(transactions))
}

// Add transaction
form.addEventListener('submit', e => {
  e.preventDefault()

  const transaction = {
    description: descInput.value,
    amount: parseFloat(amountInput.value),
    category: categoryInput.value,
    date: dateInput.value,
    type: typeInput.value
  }

  transactions.push(transaction)

  showNotification(
    `${transaction.type === 'income' ? 'Income' : 'Expense'} added!`,
    transaction.type === 'income' ? 'success' : 'expense'
  )

  form.reset()
  updateUI()
})

// Delete transaction
function deleteTransaction(index) {
  transactions.splice(index, 1)
  showNotification('Transaction deleted', 'warning')
  updateUI()
}

updateUI()