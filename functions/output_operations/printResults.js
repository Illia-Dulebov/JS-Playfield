import printSummary from "./printSummary.js";

export default function printResults(data) {
    if(data instanceof Map) {
        for(const [key, value] of data) {
            console.log(`${key} | ${value}`);
        }
        console.log('\n');
    }

    if(data instanceof Array) {
        for(const value of data) {
            printSummary([value]);
        }
        console.log('\n');
    }
}