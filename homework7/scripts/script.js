//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function printMin(u,c){
    if(u > c){
        console.log(c)
    }else if(u === c){
        console.log("числа равны");
    }else{
        console.log(u);
    }
}
printMin(44, 89)
printMin(33,90)


//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function honestArr(min,max) {
  
    if (max > min) {
        min = min
        max = max
    } else {
        let temp = min
        min = max
        max = temp
    }

    let arr = []

    for (let i = max; i >= min; i--)
        if (i % 2 == 0)
            arr.push(i)

    return arr
}
console.log(honestArr(69,16))
console.log(honestArr(25,78))


// //Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power(q,w = 2) {
    return q**w
}
const result = power(3,5)
console.log(power(4,5))
console.log(power(2,4))
console.log(power(6))


//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
let sum = 0
function sumNum(n){
    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum
}
console.log(sumNum(15))


//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных)
let sumEven = 0
let sumOdd = 0
function getSumOfNumbers(n, m){
    for(let i = n; i <= m; i++){
        if( i % 2 === 0){
            sumEven += i 
        }else{
            sumOdd += i
        }
    }
    return{
    sumEven,
    sumOdd
    }
}
console.log(`Сумма чётных чисел ${getSumOfNumbers(5, 21).sumEven}`)
console.log(`Сумма нечётных чисел ${getSumOfNumbers(5, 21).sumOdd}`);


// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
arr = [prompt("Enter your first favorite fruit"),prompt("Enter your second favorite fruit"),prompt("Enter your third favorite fruit")]
function returnLongestWord(arr){
    if (arr.length === 0){
        return null
    }else{
        let maxlength = 0;
        let longestWord = ''

        for(let i = 0; i < arr.length; i++){
            if (arr[i].length > maxlength){
            maxlength = arr[i].length
            longestWord = arr[i]
            }
        }
        return longestWord
    }
}
console.log(returnLongestWord(arr))










