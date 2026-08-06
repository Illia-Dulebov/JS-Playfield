import { Category, Payment, Currency } from "../../enums/enums.js";

class Expense {
    #id;
    #amount;
    #currency;

    constructor({id, description, amount, currency, payment, category, date} = {}) {
        this.#id = id ?? 0;
        this.description = description ?? '';
        this.changeAmount(amount);
        this.changeCurrency(currency);
        this.payment = payment ?? Payment.CASH;
        this.category = category ?? Category.ETC;
        this.date = date ?? new Date();
    }

    get id() {
        return this.#id;
    }

    get amount() {
        return this.#amount;
    }

    changeAmount(newAmount) {
        if(newAmount > 0 && newAmount < 1000000) {
            this.#amount = newAmount;
        } else {
            throw new Error('Invalid amount spent for the expense');
        }
    }

    get currency() {
        return this.#currency;
    }

    changeCurrency(currency) {
        if(!Object.values(Currency).includes(currency)) {
            throw new Error("Invalid currency");
        }

        this.#currency = currency;
    }

}

export default Expense;