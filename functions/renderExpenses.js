import refreshExpenses from "../app";

export default function renderExpenses(expenses, deleteExpense, expensesListElement) {
    
    expensesListElement.innerHTML = '';

    expenses.forEach(expense => {

        const expensesContainer = document.createElement("div");

        expensesContainer.textContent = `${expense.id} | ${expense.description} : ${expense.amount} ${expense.currency}`;

        createExpenseDeleteButton(expensesContainer, expense.id, (id) => {
            deleteExpense(id);
            refreshExpenses();
        });

        expensesListElement.append(expensesContainer);
    });
}