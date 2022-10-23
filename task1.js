//Задание №1
const arr = [0,"dgbg", 6, null, 3, 0, NaN, 3, 12,14, NaN, null];
const arr2 = [1, 1, 1, NaN, null, 1, 1, 0];
function countElements(){
    let countOdd =0;
    let countHonest = 0;
    let countZero = 0;
    let countElse = 0;
    arguments[0].forEach(function (value, index, array){
        if (isNaN(value)||(value === null)){
            countElse++;
            return {countElse};
        } else{
            if (value === 0){
                countZero++;
                return {countZero};
            }
            if ((value % 2) == 0){
                countHonest++;
                return {countHonest};
            } else {
                countOdd++;
                return {countOdd};
            }
        }
    })
    console.log(`Нечётных чисел: ${countOdd};` +' '+ `Чётных чисел: ${countHonest}` +' '+ `Нулей: ${countZero}`)
    console.log(`Элементов не являющихся числами: ${countElse} штук.`)
}
countElements(arr);
countElements(arr2);