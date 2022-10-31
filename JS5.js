// Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let output= '';
let result;
for  (id=1; id<=10; id++) {
    result = Math.pow(2, id); 
    output += `2^${id} = ${result}; `;   
}
console.log(output);

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

 const exponentiation = function (y) {
    if (!isNaN(y) || y==0){
        res = Math.pow(2, y);
        console.log(`2 ^ ${y} = ${res}`);        
        }  
    else console.log('Введите числовое значение');
    }
    exponentiation (1);
    exponentiation (0);
    exponentiation (10);
    