let a = +prompt('Введите a:');
let b = +prompt('Введите b:');

alert (isNaN(a) || isNaN(b) ? 'Вы указали значение неподходящего типа' :
(a > b ? `a - b = ${a - b}` : `a + b = ${+a + +b}`));