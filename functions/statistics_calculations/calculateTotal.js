import { Currency } from "../../enums.js";

export default function calculateTotal(expenses) {
    const expensesMap = new Map();

    for(const [key, value] of Object.entries(Currency)) {
        expensesMap.set(value, 0.0);
    }

    for(const expense of expenses) {
        const summ = expensesMap.get(expense.currency) + expense.amount; 
        expensesMap.set(expense.currency, summ);
    }

    return expensesMap;
}