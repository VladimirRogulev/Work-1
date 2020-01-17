const firstNumber = +prompt('Введите 1-ое число:');
const secondNumber = +prompt('Введите 2-ое число:');

alert (isNaN(firstNumber) || isNaN(secondNumber) ? 'Вы указали значение неподходящего типа' :
(firstNumber > secondNumber ? 
    `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}` : 
    `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`));