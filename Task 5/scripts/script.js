const firstNumber = +prompt('Введите 1-ое число:');
const secondNumber = +prompt('Введите 2-ое число:');

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('Вы указали значение неподходящего типа');
} else {
    alert (firstNumber > secondNumber ? 
        `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}` : 
        `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
}
