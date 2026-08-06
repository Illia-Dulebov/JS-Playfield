import { Category, Currency } from "../../enums/enums.js";

export default function groupTotalValues(expenses, keySelector) {
    const expensesMap = new Map();

    for(const expense of expenses) {
        const key = keySelector(expense);

        const totalSpent = (expensesMap.get(key) ?? 0) + expense.amount; 
        expensesMap.set(key, totalSpent);
    }


    return expensesMap;
}