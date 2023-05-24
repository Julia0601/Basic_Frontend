
//1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.f
const divNum = document.querySelector(".numbers")
for(let i = 100; i >= 50; i-= 10){
    const pElems = document.createElement('p')
    pElems.innerText = i
    divNum.append(pElems)
}


//2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
const lines = ["Prada", "Chanel", "Gucci", "Fendi", "Louis Vuitton", "Versace"]
const divStr = document.querySelector(".strings_container")
for(let i = 0; i < lines.length; i++){
    const pELem = document.createElement("p")
    pELem.innerText = lines[i]
    divStr.append(pELem)
}


//3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
const users = [
    {
        first_name: "Beyonce",
        last_name: "Knowles-Carter",
        age: "41"
    },
    {
        first_name: "jay-Z",
        last_name: "Carter",
        age: "53"
    },
    {
        first_name: "Blue",
        last_name: "Ivy Carter",
        age: "11"
    },
    {
        first_name: "Sir",
        last_name: "Carter",
        age: "5"
    },
    {
        first_name: "Rumi",
        last_name: "Carter",
        age: "5"
    },
    {
        first_name: "Kanye",
        last_name: "West",
        age: "45"
    },
    {
        first_name: "Kim",
        last_name: "Kardashian",
        age: "42"
    },
    {
        first_name: "Northie",
        last_name: "West",
        age: "10"
    },
    {
        first_name: "Saint",
        last_name: "West",
        age: "6"
    }
]
const celebrities = document.querySelector(".users_container")
for(let i = 0; i < users.length; i++){
        if(users[i].age > 18){
        const {first_name, last_name,age} = users[i]
        const pName = document.createElement("p")
        pName.innerText = `Имя: ${first_name}`
        const pLastName = document.createElement("p")
        pLastName.innerText = `Фамилия: ${last_name}`
        const pAge = document.createElement("p")
        pAge.innerText = `Вазраст: ${age}`
        const divUsers = document.createElement("div")
        divUsers.append(pName, pLastName, pAge)
        celebrities.append(divUsers)
    }
}
