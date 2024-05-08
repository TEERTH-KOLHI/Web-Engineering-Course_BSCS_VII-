function applyFunction(array, func){
    const resultArray = array.map(func);
    return resultArray;
}
const numbers = [1, 2, 3];
const doubleNumbers = applyFunction(numbers, (x)=> x * 2);
document.write(doubleNumbers);