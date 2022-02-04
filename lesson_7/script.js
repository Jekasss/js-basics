/*
let age = 19;
let access;
 
let access;

if (age > 18) {
    access = "Full"
} else {
    access = "Child"
}
 */

//переменная в которую присваиваем результат = условие ?
//   значение возвращаемое если условие вернёт true : значение возвращаемое если условие вернёт false
/*  let a1 = access ?? "not inicialized";   //оператор проверки на null
access = age > 18 ? "Full": "Child"     //тернарное выражение. Используем если нужно вернуть какое-то значение по условию.
                                        //Если нам нужно выполнить что-либо, используем оператор if
let a2 = access ?? "not inicialized";   //оператор проверки на null

console.log(access)
console.log(a1)
console.log(a2)
*/
// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// && - опреатор "AND" логическое "И"
let andResult = true && false
console.log(andResult)


let andResult1 = {} && 0
console.log(andResult1)

let andResult2 = {} && "a"
console.log(andResult2)
/* 
ТАБЛИЦА ИСТИННОСТИ ДЛЯ &&
a    | b     | a && b
-----+-------+--------
true | true  | true
-----+-------+--------
true | false | false
-----+-------+--------
false| true  | false
-----+-------+--------
false| false | false
-----+-------+--------
*/

let andResult3 = 5 < 10 && 2 > 1
console.log(andResult3)

// || - опрератор "OR" логическое "ИЛИ"

let orResult = false || true
console.log(orResult)

let orResult1 = 0 || "ad"
console.log(orResult1)

let orResult2 = "" || 0
console.log(orResult2)

/* 
ТАБЛИЦА ИСТИННОСТИ ДЛЯ ||
a    | b     | a || b
-----+-------+--------
true | true  | true
-----+-------+--------
true | false | true
-----+-------+--------
false| true  | true
-----+-------+--------
false| false | false
-----+-------+--------
*/

// if ((a || b ) && (c === 1 || d !== 0) || s) {}

// ! - оператор "NOT" логическое "НЕ"

let notResult = !true
console.log(notResult)

let notResult1 = !0
console.log(notResult1)

let notResult2 = !"a"
console.log(notResult2)

let notResult3 = !!5
console.log(notResult3)

/* 
ТАБЛИЦА ИСТИННОСТИ ДЛЯ !
a    | !a    
-----+------+
true | false 
-----+------+  
false| true 
-----+------+
*/

console.log(null || 4 || undefined);
console.log(1 || null || 2);
console.log(1 && null && 2);
console.log(1 && 3 && 2);
console.log(null || 0 || undefined);
