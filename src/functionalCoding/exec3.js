// Напишите функцию, которая принимает список строк и возвращает новый список,
// содержащий только те строки, которые содержат более чем одно слово.

function fullWords(listWords) {
    return listWords.filter(word => word.length > 1)
}

console.log(fullWords(['sdfsd','d', 'asfasfdsf sdfsdf', '3']));
