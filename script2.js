/**
 * 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS: Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
 */

function init(){
	var cart = {
		product: [],
		addItemToCart: function(item1) {
			for (let prod of cart.product){
				if(item1.id === prod.id){
					prod.quantity += 1;
					return;
				}
			}
			cart.product.push(item1);
		},
		countCartPrice: function() {
			let sum = 0;
			for (let prod of cart.product){
				sum += prod.quantity * prod.price;
			}
			return (sum);
		},
	};
	makeCart(cart);
}

function makeCart (cart){ 	
	item1 = {
		id: 1,
		name: "T-shirt",
		price: 10,
		quantity: 1,
	}

	item2 = {
		id: 2,
		name: "Skirt",
		price: 15,
		quantity: 1,
	}

	cart.addItemToCart(item1);
	cart.addItemToCart(item1);
	cart.addItemToCart(item2);

	GenerateCart(cart);
}

function getStr(cart){
	if(cart.product.length != 0){
		var str = '<ul>';
		for(let prod of cart.product){
			str += '<li>' + 'Name: '+ prod.name + ' - ' + prod.price + '$, quantity - ' + prod.quantity + '</li>';
		};
		str += '</ul>';
	}
	else{
		str = "Your cart is empty!<br>";
	}
	return str;
}

function GenerateCart(cart){
	var div = document.createElement("div");
	div.className = "cart";

	var str = getStr(cart);
	
	var description = "<h1>Корзина</h1><p>Содержимое:<br></p>"
	var sum = '<br> Total: ' + cart.countCartPrice();
	description = description + str + sum;

	div.innerHTML = description;
	document.body.appendChild(div);
}

window.addEventListener('load', init);
