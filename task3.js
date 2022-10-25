//Задание №3
function firstNumber(a){
    return function multiple(b){
        return a * b
        }
}

console.log(firstNumber(7)(5));


// Можно через переменную
// const result = firstNumber(5)( 6);
// console.log(result);