// Задание №2 Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
function isNumberNatural(n){
    if ((n == 0)||(n ==1)) {
        return console.log('0 и 1 не входитя во множество простых чисел')
    } else if ((n > 1000)||(n == 0)) {
        return console.log('Данные не верны')
    } if(n === 2)  {
        return console.log('Число простое');
        } else   {
            for(let x = 2; x < n; x++)  {
                if(n % x === 0) {
                return console.log('Число не является простым');
                }
            }
        return console.log('Число простое');  
        }    
}
isNumberNatural(number);
