// let name = "Ilya"

// alert (`Hello, ${1}`);
// alert (`Hello, ${"name"}`);
// alert (`Hello, ${name}`);

// /*
// Выводит модальное окно с которым взаимодействует пользователь.
// Пока окно не будет закрыто пользователь не сможет взаимодействовать с остальной страницей
// */
// let age = prompt ("Сколько тебе лет?", 32);
// /*
// Присваивает вводимое пользователем значение переменной
// prompt (текст отображаемый в модальном окне, необязательное начальное значение в поле ввода(желательно указывать для IE, иначе вернёт undefined))
// */
// alert (age);

// let isBoss = confirm("Ты здесь главный?");
// /*
// Выводит модальное окно с текстом и дновками ок(Присваивает переменной true) и отмена(Присваивает переменной false)
// */ 
// alert (isBoss);


// // преобразование к строке
// let value = 12;
// alert (typeof value);

// value = String(value);
// alert (typeof value);

// alert ("6" / "3"); //автоматически преобразует к числу

// // преобразование к числу
// let str = true; 
// alert (typeof str);

// str = Number(str);
// alert (typeof str);

// alert (Number("123"));
// alert (Number("a123z"));

//преобразование к булеву(логическое преобразование)
let boo = 789456123456987654321321324654987n;
alert (typeof boo);

boo = Boolean(boo);
alert (typeof boo);

// любое интуитивно пустое значение 0, undefined, null, NaN, "пустая строка"(пробел не пустая строка), будут равны false, остальные - true
alert (Boolean(1));
alert (Boolean(0));
alert (Boolean("word"));
alert (Boolean("")); 
alert (Boolean(" "));
alert (Boolean(false));