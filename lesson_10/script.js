let result = sum(2, 5);
console.log(result)

function sum(a, b) {
    let c = a + b;
    return c;
}

function ask(condition, yes, no) {
    if (condition) {
        yes()
    } else {
        no()
    }
}

function showOK() {
    console.log("OK")
}

function showERROR() {
    console.log("ERROR")
}

ask(5 > 2, showOK, showERROR)
ask(5 < 2, showOK, showERROR)


ask(10 > 20, function () {}, function () {
    console.log("!!!!")
})

let myFunc = () => {
    console.log("My func!")
}

myFunc();

ask(10 > 20, () => {}, () => {
    console.log("!!!!")
});

(() => {
    console.log("IIF") //немедленно исполняемая функция
})();

(function show() {
    console.log("ERROR")
})();

//рекурсивная функция

let fuct = (n) => {
    if (n === 0) {
        return 1
    }

    return n * fuct(n - 1)
}

let res = fuct(5)
console.log(res)