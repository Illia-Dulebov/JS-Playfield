export default function printSummary(expenses) {
    for (const expense of expenses) {
        const expenseSummary = `Expense:\nAmount: ${expense.amount};\nCurrency: ${expense.currency};\nPayment type: ${expense.payment};\nCategory: ${expense.category};\nDate: ${expense.date};`;
        console.log(expenseSummary);
    }
}