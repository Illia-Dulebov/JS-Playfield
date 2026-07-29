import { Currency } from "../../enums.js";
import currencyExchangeToEuro from "../currencyExchangeToEuro.js";

export default function findExpensiveItems(expenses, minAmount) {
    const expensiveItems = new Map();

    for(const expense of expenses) {
        
        const exchangedToEuroAmount = currencyExchangeToEuro(expense.amount, expense.currency);

        if(exchangedToEuroAmount >= minAmount) {
            expensiveItems.set(expense.payment, expense.amount);
        }
    }

   return expensiveItems;
}