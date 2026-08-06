export default function createExpenseDeleteButton(expensesContainer, expenseId, onDelete) {

    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.id = `delete-expense-${expenseId}`;

    deleteButton.addEventListener('click', () => onDelete(expenseId));

    expensesContainer.append(deleteButton);
}