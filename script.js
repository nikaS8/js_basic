/**
 * 	1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
	2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы? Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.

 */


function fromNumToObj(num){ 
	let newNumObj = {};

	newNumObj.ones = num % 10;
	newNumObj.tens = (parseInt(num / 10)) % 10;
	newNumObj.hundreds = parseInt(num / 100);
	return newNumObj;
}	

function task1 () {
	while (true) {
		var num = prompt("Give me a number");
		if(num.length >= 4){
			alert("Number is too big! Only 3 digits!");
			alert("One more try! Keep your eyes open.")
		}
		else {
			break;
		}
	}
	let numObj = {
		ones: 0,
		tens: 0,
		hundreds: 0,
	};
	numObj = fromNumToObj(num);
	console.log(`ones = ${numObj.ones}\ntens = ${numObj.tens}\nhundreds = ${numObj.hundreds}\n`);
}


function addItemToBin(item, cart){
	cart.push(item);
}

function countCartPrice(cart){
	let sum = 0;

	for(let i = 0; i < cart.length; i++){
		sum += cart[i].price;
	}
	return (sum);
}

function task2 (){
	let cart = [];
	let item1 = {
		name: "T-shirt",
		price: 10,
	};
	let item2 = {
		name: "Skirt",
		price: 15,
	};

	addItemToBin(item1, cart);
	addItemToBin(item2, cart);

	sum = countCartPrice(cart);
	console.log(sum);
}

task1();
task2();