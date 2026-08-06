import Expense from "../../models/Expense.js";
import { Currency, Payment, Category } from "../../enums/enums.js";

export default function onAddExpense(id, description, amount, addExpense) {
    
    const newExpense = new Expense({
        id: id,
        description: description,
        amount: amount,
        currency: Currency.LEKE,
        payment: Payment.CASH,
        category: Category.ETC,
        date: new Date(),
    });

    addExpense(newExpense);
}