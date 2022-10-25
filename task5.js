//Задание №5

let pow = (a, b) => {
    if ((a>0)&&(b>0)) {  //Проверка на условие, что a и b - натуральные числа
        return Math.pow(a, b)
    } else {
        return console.log("Введите два НАТУРАЛЬНЫХ числа")
    }
}

console.log(pow(3, 6))