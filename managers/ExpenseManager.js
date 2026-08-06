class ExpenseManager {
    #expenses = [];
    #nextId = 0;

    getNextId() {
        this.#nextId += 1;
        return this.#nextId;
    };

    addExpense(expense) {
        this.#expenses.push(expense);
    }

    getAllExpenses() {
        return [...this.#expenses];
    }

    deleteExpense(id) {
        this.#expenses = this.#expenses.filter(element => element.id !== id);
    }

    updateExpense(id, {description, amount, currency, payment, category, date} = {}) {
        let expense = this.#expenses.find(element => element.id === id);
        expense.description = description;
        expense.changeAmount(amount);
        expense.payment = payment;
        expense.category = category;
        expense.date = date;
    }

    getExpenseById(id) {
        const expense = this.#expenses.find(element => element.id === id);
        return expense;
    }

}

export default ExpenseManager;