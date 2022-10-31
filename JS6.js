// Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось
// :), во второй :):) и так далее Пример в консоли: :) :):) :):):) :):):):) :):):):):)

let str = ':)';
for (let i = 1; i <= 5; i++){
	console.log(str.repeat(i));
}



let s = ':)';
for (i = ':)'; i.length <= 10; i += s) {
    console.log(i);
}


// Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль
// (как в условии смайлик), а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

const printSmile = function (stroka, numberOfRows){
	stroka=String(stroka);
for (let i = 1; i <= numberOfRows; i++){
	console.log(stroka.repeat(i));
}
}
printSmile('=)',2);
printSmile('test ',2);
printSmile(0,2);
//____________________________________________________________
const printSmile2 = function (stroka2, numberOfRows2){
	let result = '';	
	for  (i=1; i<=numberOfRows2; i++) {
		console.log(result += stroka2);
	}
}
printSmile2('^^', 5);
