'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    date = prompt("Введите дату в формате YYYY-MM-DD");
let expName = prompt("Введите обязательную статью расходов в этом месяце"),
    expValue = prompt("Во сколько обойдется?");

appData = {
    budget: money,
    timeData: date,
}
expenses = {
    expName: expValue,
}