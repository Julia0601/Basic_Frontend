//Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
const userNum = prompt("Введите число")
console.log(`10% от введенного числа = ${userNum / 10}`)

// Написать программу, которая получает два числа и выводит наименьшее
const num1 = +prompt("Первое число")
const num2 = +prompt("Второе число")
if(num1 > num2){
    console.log("Наименьшее " + num2)
}else{
    console.log("Наименьшее " + num1)
}

// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
const num = prompt("Введите число")
if(num > 100){
    console.log("Число  больше 100")
}else if(num == 100){
    console.log("Число равно 100")
}else{
    console.log("Число меньше 100")
}

// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.
const userName = prompt("Ваше имя")
const age = prompt("Ваш возраст в годах")
if(age >= 18){
    console.log(`Hello, ${userName}`);
}else{
    console.log(`Hi, ${userName}`);
}
