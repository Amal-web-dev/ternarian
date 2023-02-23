let name = prompt('whats your name?').toLowerCase().trim()

name === 'alex' ? console.log('okay') : console.log('Пользователь не найден');

let account = prompt('Ведите пароль')
account == 7777 ? console.log(account) : console.log('Неправильный пароль');

let money = prompt('Сколько хотите снять?')

money <= 10000 ? console.log('вы сняли ' + money + ' долларов') || console.log(10000 - money + ' Осталось') : console.log('Недостаточно средств');


let user = prompt('Введите ваше имя').toLowerCase().trim()
user[0] === 'a' ? console.log('нам нравиться') : console.log('Нам не подходит ваше имя');

let age = prompt('Сколько вам лет')
age >= 20 && age <= 40 ? console.log(age) : console.log('Ты не в возрасте');

let balance = prompt('Сколько с вами денег?')
balance >= 100 ? console.log(balance) : console.log('У тебя мало денег');

let freePlace = 10
let booked = 8
let place = +prompt('Сколько с вами людей')

place + booked <= freePlace ? console.log('Проходите') : console.log('Нет мест');