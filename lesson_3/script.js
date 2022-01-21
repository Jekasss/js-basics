let message = "Hello";
message = 123;

alert(message);

//Типы данных

//Number число ограничение самого большого числа +- (2 в 53 степени +/-1)
let n = 123;
n = 1.23;
n = Infinity;
n = -Infinity;
n = NaN;

alert("строка"/2);

// BigInt большое целое число
const BIGINT = 12323534524674656834609384574095762394573649298476928375n; // n - обозначает что наше число BigInt

// String - строка. Все ковычки обозначают тип строка. Обратные ковычки обозначают шаблонную строку
let str = "Hello";
let str1 = 'Hello';
let str2 = `Hello`;

alert(`${str} World!`) // шаблонная строка
alert(`2 + 2 = ${2+2}`) // шаблонная строка

// Boolean булев тип данных (true и false)
let fieldChecked = true;
let isGreater = 4 > 1;
alert(isGreater);

//null - пустота
let age = null;

// undefined - значение не определено
let x;
alert(x === undefined);

//Object
let obj = {
    name: "Yevgeniy",
    age: 31,
    isVerify: true,
    account: {
        login: "login",
        password: "password",
    },
    run: function() {
        alert("RUN!");
    },
}

// Оператор для определения типа данных - typeof

alert(`typeof undifined = ${typeof undifined}`);
alert(`typeof 0 = ${typeof 0}`);
alert(`typeof NaN = ${typeof Nan}`);
alert(`typeof 10n = ${typeof 10n}`);
alert(`typeof true = ${typeof true}`);
alert(`typeof "text" = ${typeof "text"}`);
alert(`typeof Math = ${typeof Math}`);
alert(`typeof null = ${typeof null}`);
alert(`typeof alert = ${typeof alert}`);
alert(`typeof x = ${typeof x}`);
