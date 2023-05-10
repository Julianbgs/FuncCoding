// Напишите функцию, которая принимает список чисел и возвращает новый список, содержащий только четные числа.

function evenList(list) {
    return list.filter(elem => elem % 2 === 0)
}

console.log(evenList([1,2,3,4]))
