# Expense Tracker

A simple and responsive Expense Tracker built with HTML, CSS, and JavaScript. This application helps users manage their finances by tracking income and expenses, calculating balances, and storing transaction data locally so it persists even after refreshing the page.

<!-- ![Expense Tracker Screenshot](assets) -->


## Features

### ➕ Add Transactions

* Add income and expense transactions.
* Enter a transaction description and amount.
* Positive amounts represent **income**.
* Negative amounts represent **expenses**.

### 📄 Transaction History

* View all transactions in a history list.
* Income transactions are marked with a **+** sign.
* Expense transactions are marked with a **−** sign.
* Delete transactions individually.

### Financial Summary

The application automatically calculates and displays:

* Total Balance
* Total Income
* Total Expenses

### 💾 Local Storage Support

* Transactions are saved in the browser using `localStorage`.
* Data remains available even after refreshing or closing the browser.

### Responsive Design

* Works seamlessly on desktop, tablet, and mobile devices.

## Project Structure


expense-tracker/
├── index.html
├── style.css
└── track.js

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

##  How It Works

1. Enter a transaction description.
2. Enter an amount:

   * Positive value → Income
   * Negative value → Expense
3. Click Add Transaction.
4. The transaction is added to the history list.
5. Totals update automatically.
6. Transactions are stored in local storage for persistence.

## Future Improvements

* Edit existing transactions.
* Export data to CSV/PDF.
* Monthly and yearly reports.
* Dark mode support.
* User authentication and cloud storage.
* Advanced charts and analytics.

## Learning Objectives

This project demonstrates:

* DOM Manipulation
* Event Handling
* Array Methods
* JavaScript Functions
* Local Storage
* Responsive Web Design
* Data Persistence

## Author

Built with using HTML, CSS, and JavaScript.

Feel free to fork, improve, and customize this project for your own needs.
