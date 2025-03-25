// Запрашиваем бюджет на месяц и дату
let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

// Создаем объект appData
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// Запрашиваем обязательные расходы (по два раза)
let a1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let a2 = prompt("Во сколько обойдется?", '');
let a3 = prompt("Введите обязательную статью расходов в этом месяце", '');
let a4 = prompt("Во сколько обойдется?", '');

// Записываем данные в объект expenses
appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

// Вычисляем бюджет на 1 день (при 30-дневном месяце) и выводим его
alert("Бюджет на 1 день: " + (appData.budget / 30));
