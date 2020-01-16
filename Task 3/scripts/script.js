const firstNumber = +prompt('Введите 1-ое число:');
const secondNumber = +prompt('Введите 2-ое число:');

alert (firstNumber > secondNumber ? 
    `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}` : 
    `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);