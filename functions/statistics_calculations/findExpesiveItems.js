import { Currency, Payment } from "../../enums/enums.js";
import currencyExchangeToEuro from "../currencyExchangeToEuro.js";

export default function findExpensiveItems(expenses, minAmount) {
    const expensiveItems = [];

    for(const expense of expenses) {
        
        const exchangedToEuroAmount = currencyExchangeToEuro(expense.amount, expense.currency);

        if(exchangedToEuroAmount >= minAmount) {
            expensiveItems.push(expense);
        }
    }

   return expensiveItems;
}