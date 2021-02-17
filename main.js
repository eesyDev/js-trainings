// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// };

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }
// let str = '';
// for (let i = 65; i < 220; i++) {
//     str = str + String.fromCodePoint(i);
//     console.log(String.fromCodePoint(i));
// }

// function firstLetterUp (str) {
//    let newStr = str[0].toUpperCase() + str.slice(1);
//    console.log(newStr);
// }
// firstLetterUp('nimatods');

// function checkSpam(str) {
//     let lowerString = str.toLowerCase();
//     if (lowerString.includes('viagra') || lowerString.includes('xxx')){
//         return true;
//     } else {
//         return false;
//     }
// }
// checkSpam('ViaGra');
// checkSpam('XXX');
// console.log(checkSpam('ViaGra'));
// console.log(checkSpam('Fluffy'));

// function truncate (str, maxLength) {
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength -1) + '...';
//     } else {
//         return str;
//     }
// }
function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength -1) + '...' : str;
}
console.log(truncate('Lorem ipsum dolor sit amet', 20));4
console.log(truncate('hello world', 25));

function extractCurrencyValue(numValue) {
        return +numValue.slice(1);    
}
console.log(extractCurrencyValue('120'));
console.log(extractCurrencyValue('$120'));

let a = 3
function addTwo(x) {
   let ret = x + 2
   return ret
 }
let b = addTwo(a)
console.log(b);

let val1 = 2
 function multiplyThis(n) {
   let ret = n * val1
   return ret
 }
 let multiplied = multiplyThis(6)
 console.log('example of scope:', multiplied);

 let val = 7
 function createAdder() {
   function addNumbers(a, b) {
     let ret = a + b
     return ret
   }
   return addNumbers
 }
 let adder = createAdder()
 let sum = adder(val, 8)
 console.log('example of function returning a function: ', sum);

 function createCounter() {
    let counter = 0
    const myFunction = function() {
      counter = counter + 1
      return counter
  }
   return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3);

let c = 4
function addX(x) {
  return function(n) {
     return n + x
  }
}
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)
