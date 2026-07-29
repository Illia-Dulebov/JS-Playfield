import { Currency, Payment, Category } from "./enums.js";
import { expense } from "./data/expense.js";
import calculateTotal from "./functions/statistics_calculations/calculateTotal.js";
import expenses from "./data/expenses.js";
import findExpensiveItems from "./functions/statistics_calculations/findExpesiveItems.js";
import calculateTotalByCategories from "./functions/statistics_calculations/calculateTotalByCategories.js";
import printResults from "./functions/output_operations/printResults.js";

let totalExpenses = calculateTotal(expenses);
printResults(totalExpenses);

let expensiveItems = findExpensiveItems(expenses, 10);
printResults(expensiveItems);

let totalExpensesByCategories = calculateTotalByCategories(expenses);
printResults(totalExpensesByCategories);