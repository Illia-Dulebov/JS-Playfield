import { Currency } from "../enums/enums.js";

const exchangeRates = new Map([[Currency.LEKE, 92], [Currency.EURO, 1], [Currency.USD, 1.14],]);

export default function currencyExchangeToEuro(amount, currency) {
    const rate = exchangeRates.get(currency);

    if(rate === undefined) {
        throw new Error('Wrong currency entered!');
    }
    
    return amount / exchangeRates.get(currency);
}