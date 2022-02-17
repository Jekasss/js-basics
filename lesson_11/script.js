// Массивы специальный объект отличается тем что ключи это числа а знчения это любые данные
// есть свойство length задаёт размер массива
let myArr = [5, 4 ,3, 2, 1, 0];
let fruits = ["apple", "orange", "pinapple"];

console.log(fruits[1]);
console.log(myArr[0]);

fruits[1] = "apple";
console.log(fruits[1]);
console.log(fruits);

console.log(myArr.length);

let myArr1 = [];
myArr1 = 1;
console.log(myArr1.length);

const myArr2 = [];

// Методы массивов
console.log(myArr2);

myArr2.push("Женя");
console.log(myArr2);

myArr2.push("Кирилл");
console.log(myArr2);

myArr2.unshift("Илья");
console.log(myArr2);

myArr2.unshift("Максим");
console.log(myArr2);

myArr2.pop();
console.log(myArr2);

myArr2.shift();
console.log(myArr2);

let name = myArr2.pop();
console.log(name);

name = myArr2.shift();
console.log(name);

console.log(myArr2);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

fruits[10] = "apple"
console.log(fruits.length)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (let value of fruits) { //цикл для массива
    console.log(value)
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.log(matrix[1][1])

for (let subArr of matrix) {
    for (let val of subArr) {
        console.log(val)
    }
}


