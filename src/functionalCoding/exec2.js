// Напишите функцию, которая принимает два списка
// и возвращает новый список, содержащий элементы обоих списков.

function combineLists(targetList, finalList) {
    return targetList.concat(finalList);
}

console.log(combineLists([1,2], [3]));
