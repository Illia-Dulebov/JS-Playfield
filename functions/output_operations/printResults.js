export default function printResults(data) {

    if(data instanceof Map) {
        for(const [key, value] of data) {
            console.log(`${key} | ${value}`);
        }
        console.log('\n');
    }

    if(data instanceof Array) {
        let finalString = '';
        for(const value of data) {
            finalString += `${value} `;
        }

        console.log(`${finalString}\n`);
        console.log('\n');

    }
}