'use strict';

const ozzyText = {
    a: 'I ',
    b: 'don\'t want ',
    c: 'to ',
    d: 'the ',
    f: 165,
    e: 'world'
};

const mapResult = Object.keys(ozzyText)
    .map(getText);
function getText(key) {
    return ozzyText[key];
}
const joint = mapResult.join('');
const finalResult = joint.replace(/[0-9]/g, '');
console.log(finalResult);
// Задание номер 1
// Преобразовать массив свойств объекта ozzyText так,
// чтобы в результирующем массиве оказались только строковые значения

/*
const reduceResult = Object.keys(ozzyText)
    .reduce(function(accumulator, currentKey){
        const currentValue = ozzyText[currentKey];
       return accumulator + currentValue;
   }, '');
console.log(reduceResult);
*/

// Задание номер 2
// С помощью reduce и Object.keys написать функцию invert,
// которая принимает в себя объект и меняет у него ключи и значения свойств местами
/*
const input = { a: 'b', c: 'd' };
const output = invert(input);
console.log(output); // { b: 'a', d: 'c' }
*/