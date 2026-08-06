import ExpenseManager from "./managers/ExpenseManager.js";
import onAddExpense from "./functions/crud_operations/onAddExpense.js";
import renderExpenses from "./functions/renderExpenses.js";

const manager = new ExpenseManager();

const descriptionInputElement = document.getElementById("description");
const amountInputElement = document.getElementById("amount");

const createExpenseButtonElement = document.getElementById("add-expense");

const expensesListElement = document.getElementById("expenses-list");

createExpenseButtonElement.addEventListener('click', () => {
    onAddExpense(manager.getNextId(), descriptionInputElement.value, Number(amountInputElement.value), (expense) => manager.addExpense(expense));
    refreshExpenses();
});


function refreshExpenses() {
    renderExpenses(
        manager.getAllExpenses(),
        (id) => manager.deleteExpense(id),
        expensesListElement
    );
}

export default refreshExpenses;