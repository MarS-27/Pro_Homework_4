firstQuestion = prompt('Сколько будет 2+2?');
secondQuestion = prompt('Солнце встает на востоке?').trim().toLowerCase();
thirdQuestion = +prompt('Сколько будет 5 / 0?').trim().toLowerCase();
fourthQuestion = prompt('Какого цвета небо?').trim().toLowerCase(); 
fifthQuestion = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.');

result = 0;
sum = 0;

if (firstQuestion == 4) {
    result += 10;
}
if (secondQuestion == "да") {
    result += 10;
}
if (isNaN(thirdQuestion)) {
    result += 10;
}
if (fourthQuestion == "голубое") {
    result += 10;
}
if (fifthQuestion == 42) {
    result += 10;
}

sum += result;
alert(`Результат опроса ${sum} баллов`);