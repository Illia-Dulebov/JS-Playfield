import Expense from "../models/Expense";

class ExpenseRepository {
    expensesKey = 'expenses';

    constructor(storage) {
        this.storage = storage;
    }

    saveExpenses(expenses) {
        this.storage.setItem(expensesKey, JSON.stringify(expenses));
    }

    getAllExpenses() {
        const json = this.storage.getItem(expensesKey);

        if(!json) {
            return [];
        }

        const data = JSON.parse(json);

        return data.map(Expense.fromJSON);
    }
}

export default ExpenseRepository;