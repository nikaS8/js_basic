/**
 * 	1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
	2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
		a) Организовать такой массив для хранения товаров в корзине;
		b) Организовать функцию countCartPrice, которая будет считать стоимость корзины.
	3. *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
	for(…){// здесь пусто}

	4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
	x
	xx
	xxx
	xxxx
	xxxxx
 */

function task1() {
	let arr = Array.from(Array(100).keys());;
	let p = 2;
	let i = 0;
	while (p < 10) {
		for (i = 2 * p; i < arr.length; i += p) {
			delete arr[i];
		}
		for (i = p + 1; i < 100; i++) {
			if (arr[i]) {
				break;
			}
		}
		p = i;
	}
	let temp = [];
	for(let value of arr)
    	value && temp.push(value); // copy each non-empty value to the 'temp' array
	temp.shift(); // delete "1"
	arr = temp;
	console.log(arr);
}

function addItemToBin(item, bin){
	bin.push(item);
}

function countCartPrice(bin){
	let sum = 0;
	for(let i = 0; i < bin.length; i++){
		sum += bin[i][1];
	}
	return (sum);
}

function task2() {
	let sum;
	let bin = [];

	addItemToBin(["T-shirt", 10], bin);
	addItemToBin(["Skirt", 15], bin);

	sum = countCartPrice(bin);
	console.log(sum);
}

function task3(){
	for(let i = 0; i < 10; console.log(i++)){}
}

function task4(){
	let n = 1;
	let i = 0;

	while(n < 20){
		i = 0;
		while(i < n){
			i++;
		}
		console.log("*".repeat(i) + '\n');
		n++;
	}
}

task1();
task2();
task3();
task4();