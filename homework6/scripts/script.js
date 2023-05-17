// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
for(let i = 0; i <= 10; i += 2){
    console.log(i)
}   
console.log("======================")

// // // Напишите цикл for, который выводит в консоль  все числа от 55 до 20
for (let i = 55; i >= 20; i--) {
    console.log(i)
}

// Дан массив numbers. Вывести в консоль все числа из массива. Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
const numbers = [3, 5, 11, 2, 8, 1, 6]
console.log(numbers)
const numbers_squared = [] //?????????????????????
for(let i = 0; i < numbers.length; i++){
    numbers_squared[i] = numbers[i]**2
}
console.log(numbers_squared)

// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу
const last_elem = numbers_squared[6] 
console.log(last_elem)

// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’
const user = {
    firstName: 'Bob', 
    lastName: 'Marley', 
    age: 36,
    salary: 1400000
   }
console.log(`User's name is ${user['firstName']} ${user.lastName}. He is ${user.age} years old`)
