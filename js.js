

/* условия
let num = 50;

if (num < 49) {
    console.log('False!')
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('True!')
}

(num == 50) ? console.log('False!') : console.log('Too much');

switch (num) {
    case num  < 49:
        console.log('false!');
        break;
    case num > 100:
        console.log('Too much');
        break;
    case 50: 
        console.log('True');
        break;
    default: 
        console.log('Something wrong')
        break;
}
*/
//циклы

//num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num); /цикл ипользуется только тогда, когда нужно сначала сделать а потом проверить условие
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//     i++;
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         a = prompt("Введите обязательную статью расходов в этом месяце");
//     }
// }
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//     i++;
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         a = prompt("Введите обязательную статью расходов в этом месяце");
//     }
// }
// while(i < 2);
'use strict';

let money, date;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    date = +prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();
let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: true,
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        
    };
};
chooseExpenses();


function detectDayBudget(){
    appData.moneyPerDay = +(appData.budget / 30).toFixed();
    alert('Money for day ' + appData.moneyPerDay);
}
detectDayBudget();
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Poor');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Middle');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Rich');
    } else {
        console.log('Error');
    }
};
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с депозита: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for(let i = 0; i < 3; i++) {
        let a = prompt('Статья необязательных расходов'),
            b = prompt('Стоимость');
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '') {
            appData.optionalExpenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseOptExpenses();

