function funcName () {
    console.log("My first function!")
}

funcName();

function great(name) {
    console.log(`Hi, ${name}!`);
}

great("Evgeniy");
let Kirill = "Kirill";
great (Kirill);

function ilya() {
    return "Ilya";;
}

let c = ilya();
console.log(c);

great(ilya());

great();

let x = great("A")
console.log(x);

function showMessage(message) {
    let now = new Date();// переменные объявленные внутри функции используются только внутри функции. за пределами функции не существует
    console.log(`${now.toISOString()}: ${message}`)
}

showMessage(ilya());

showMessage("My message!");


let y = "ЯН" //глобальная переменная, к ней доступ есть у функций

function newGreat() {
    console.log(`Hi, ${y}`);
}

newGreat();

function pow(x, y) { 
    return x**y; //возведение в степень
}

console.log (pow(2, 10));
