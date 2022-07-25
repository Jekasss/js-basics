/* 
Конструкция Switch
Имеет один или более блоков case и необязательный блок default
Позволяет сравнить выражение сразу с несколькими вариантами
имеет вид
switch(x) {
    case "value1":
        ...
        [break]
    case "value2":
        ...
        [break]
        
        default:
        ...
        [break]
}
Переменаая х проверяется на строгое равенство значениям value
если соответсвтвие установлено -switch начинает выполнять код
в соответствующем case до ближайшего break или конца switch
Если ни один case не совпал выполняется default, если он есть
*/
/* 
let a = +prompt ("Введите число", 0);

switch (a) {
    case 3:
        alert("Маловато");
        break;
    case 4:
        alert("В точку!");
        break;
    case 5:
        alert("Перебор");
        break;
    default:
        alert ("Нет таких значений");
    }
*/
    // Аргументом может быть любое значение
/* 
let b = 1;
let c = 13;

switch (c) {
    case b + 10:
        alert ("Сравнение верно");
        break;
    case b + 12:
        alert ("Сравнение верно");
        break;
    default:
        alert ("Неверное сравнение");    
}
 */
// Проверка равенства всегда строгая.
// Значения должны быть одного типа.
/* 
let browser = prompt ("Какой браузер Вы используете?");

if (browser == "Edge") {
    alert ("You've got the Edge");
} else if (browser == "Chrome"
    || browser == "Firefox"
    || browser == "Safari"
    || browser == "Opera") {
    alert ("Okay we support these browser too");
} else if (browser == "Yandex") {
    alert ("You're use the best of browsers");
} else {
    alert ("What is this?")
}  
 */
/* 
const number = +prompt('Введите число от 0 до 3');

switch (number) {
    case 0:
        alert ('Вы ввели число 0');
        break;

    case 1:
        alert ('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert ('Вы ввели число 2 или 3');
        break;
    default:
        alert ('Вы ввели неверное число');    
}
 */

