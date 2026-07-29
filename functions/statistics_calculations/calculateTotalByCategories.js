import { Category, Currency } from "../../enums.js";

export default function calculateTotalByCategories(expenses) {
    const expensesMap = new Map();

    for(const [key, value] of Object.entries(Category)) {
        expensesMap.set(value, 0.0);
    }

    for(const expense of expenses) {
        const summ = expensesMap.get(expense.category) + expense.amount; 
        expensesMap.set(expense.category, summ);
    }


    return expensesMap;
}