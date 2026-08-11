import { Category, Payment, Currency } from "../../enums/enums.js";

class Expense {
    #id;
    #amount;
    #currency;

    constructor({id, description, amount, currency, payment, category, date} = {}) {
        this.#id = crypto.randomUUID();
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

    toJSON() {
        return {
            id: this.#id,
            description: this.description,
            amount: this.#amount,
            currency: this.#currency,
            payment: this.payment,
            category: this.category,
            date: this.date,
        };
    }

    static fromJSON(json) {
        return new Expense({
            id: json.id,
            description: json.description,
            amount: json.amount,
            currency: json.currency,
            payment: json.payment,
            category: json.category,
            date: new Date(json.date),
        });
    }

}

export default Expense;