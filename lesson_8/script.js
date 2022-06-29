/* 
цикл While (цикл с предусловием)

While (условие) {
    // код
    // правильно называть тело цикла
}

1 повторение тела цикла называется итерация

*/
let i = 0;

/*
while (i < 5) {
    console.log(i);
    i++;
}

while (i) {
    console.log(i);
    i--;
}

 
Цикл do...while (цикл с постусловием)  

do {
    // тело цикла
} while (условие)
*/
/*
do {
    console.log(i);
    i++
} while (i < 10); 
*/
/*
цикл for(цикл с заданным количеством повторений)

for (начало или инициализация; условие; шаг) {
    // тело цикла
}


for (let j = 0; j < 10; j++) {
    console.log(j)
}

for (let j = 0; j < 10; j+= 2) {
    console.log(j)
}

for (let j = -10; j < 10; j+= 2) {
    console.log(j)
    if (!j) {
        break;
    }
}

for (let j = -10; j < 10; j++) {
        if (j % 2 === 0) {
        continue;
    }
    console.log(j)
}
*/
out: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i * j)
        if (i * j === 4) {
            break out; // out - метка указывающая какой цикц прервать. указывается у break и цикла который хотим прервать
        }
    }
}

console.log("END")
