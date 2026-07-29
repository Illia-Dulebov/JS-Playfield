import { Currency, Payment, Category } from "../enums.js";
import { expense } from "./expense.js";

const expenses = [
    { 'amount': 1290, 'currency': Currency.LEKE, 'payment': Payment.CARD, 'category': Category.FOOD, 'date': new Date(2026, 7, 28), },
    { 'amount': 12.5, 'currency': Currency.EURO, 'payment': Payment.CARD, 'category': Category.HOME, 'date': new Date(2026, 7, 1), },
    { 'amount': 2, 'currency': Currency.EURO, 'payment': Payment.CASH, 'category': Category.FOOD, 'date': new Date(2026, 6, 29), },
    { 'amount': 200, 'currency': Currency.LEKE, 'payment': Payment.CARD, 'category': Category.FUN, 'date': new Date(2026, 7, 10), },
    { 'amount': 450, 'currency': Currency.LEKE, 'payment': Payment.CASH, 'category': Category.CLOTHES, 'date': new Date(2026, 7, 26), },
];

expenses.push(expense);

export default expenses;