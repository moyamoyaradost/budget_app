'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true // Изменено на true для примера, может быть изменено в зависимости от требований
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдется?", "");

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;
alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");

if (appData.moneyPerDay < 100) {
    console.log("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log("Это высокий уровень достатка!");
} else {
    console.log("Произошла ошибка");
}

// Дополнительный функционал (пример):
let howMuchCanSave = prompt("Сколько вы можете сэкономить в месяц?");
if (appData.savings) {
    let save = +howMuchCanSave,
        percent = 10; // Допустим, процент от сбережений
    alert("Ваш ежемесячный доход с депозита: " + (save / 100 / 12 * percent));
}
