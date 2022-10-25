//Задание №4
function printNumbers(a, b){
    let numbers = [];
    for (a; a<= b; a++) {
        numbers.push(a);
    }
    const str = numbers.join(' ');
    console.log( str)
}
setInterval(printNumbers, 1000, 5, 15);