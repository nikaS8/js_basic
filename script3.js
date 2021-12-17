/**
* Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
	если a и b положительные, вывести их разность;
	если а и b отрицательные, вывести их произведение;
	если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 
	### 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 
	### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 
	### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 
	### 7. *Сравнить null и 0. Попробуйте объяснить результат. 
	### 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

let a = getRandomInt(-10, 10);
let b = getRandomInt(-10, 10);

if (a > 0 && b > 0) {
	alert(`a и b положительные, их разность равна ${a - b}`);
} else if (a < 0 && b < 0) {
	alert(`a и b отрицательные, их произведение равно ${a * b}`);
} else {
	alert(`a и b разных знаков, их сумма равна ${a + b}`);
}

/*  ### 4  */
a = getRandomInt(0, 15);
switch (a) {
	case 0:
		alert(0);
	case 1:
		alert(1);
	case 2:
		alert(2);
	case 3:
		alert(3);
	case 4:
		alert(4);
	case 5:
		alert(5);
	case 6:
		alert(6);
	case 7:
		alert(7);
	case 8:
		alert(8);
	case 9:
		alert(9);
	case 10:
		alert(10);
	case 11:
		alert(11);
	case 12:
		alert(12);
	case 13:
		alert(13);
	case 14:
		alert(14);
	case 15:
		alert(15);
}

/*  ### 5  */
function sum(a, b) {
	return (a + b);
}

function sub(a, b) {
	return (a - b);
}

function mult(a, b) {
	return (a * b);
}

function div(a, b) {
	return (a / b);
}

/*  ### 6  */
function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "sum":
			return sum(arg1, arg2);
		case "sub":
			return sub(arg1, arg2);
		case "mult":
			return mult(arg1, arg2);
		case "div":
			return div(arg1, arg2);
	}
}
