import { Currency } from "../../enums/enums.js";
import currencyExchangeToEuro from "../currencyExchangeToEuro.js";

export default function calculateAverageExpenses(expenses) {
    let totalSpent = 0;

    for(const expense of expenses) {
        const exchangedToEuroAmount = currencyExchangeToEuro(expense.amount, expense.currency);
        totalSpent += exchangedToEuroAmount;
    }

    return totalSpent / expenses.length;
}