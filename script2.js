var it1 = {
	id: 1,
	name: 'T-shirt ',
	price: 10,
	quantity: 1,
};

var it2 = {
	id: 2,
	name: 'Skirt ',
	price: 15,
	quantity: 1,
};

function getItem1() {
	let item1 = document.createElement("div");
	item1.className = 'item1';
	item1.style.marginTop = '50%';
	item1.style.paddingBottom = '20px';
	item1.innerHTML = it1.name + it1.price + '$ ';
	return (item1);
}

function getItem2() {
	let item2 = document.createElement("div");
	item2.className = 'item2';
	item2.innerHTML = it2.name + it2.price + '$ ';
	return (item2);
}

function initCart() {
	let cart = {
		product: [],
		addItemToCart: function (item1) {
			for (let prod of cart.product) {
				if (item1.id === prod.id) {
					prod.quantity += 1;
					return;
				}
			}
			cart.product.push(item1);
		},
		countCartPrice: function () {
			let sum = 0;
			for (let prod of cart.product) {
				sum += prod.quantity * prod.price;
			}
			return (sum);
		},
	};
	return (cart);
}

function getStr(cart) {
	if (cart.product.length != 0) {
		var str = '<ul>';
		for (let prod of cart.product) {
			str += '<li>' + 'Name: ' + prod.name + ' - ' + prod.price + '$, quantity - ' + prod.quantity + '</li>';
		};
		str += '</ul>';
	} else {
		str = "Your cart is empty!<br>";
	}
	return str;
}

function getDescription(cart){
	let description = "<h1>Корзина</h1><p>Содержимое:<br></p>";
	let str = getStr(cart);
	let sum = '<br> Total: ' + cart.countCartPrice();
	return (description + str + sum);
}

function routine() {
	let wrap = document.createElement('div');
	wrap.className = 'main';
	wrap.style.display = 'flex';
	wrap.style.justifyContent = 'space-around';

	let catalog = document.createElement("div");
	catalog.className = 'item';
	catalog.style.textAlign = 'center';

	let item1 = getItem1();
	let item2 = getItem2();

	let cartZone = document.createElement('div');
	cartZone.className = "cart";
	cartZone.style.backgroundColor = 'light-gray';
	cartZone.innerHTML = '<h1>Cart</h1>';
	let cart = initCart();

	let description = getDescription(cart);
	cartZone.innerHTML = description;

	var button1 = document.createElement('button');
	button1.innerHTML = 'Buy it!';
	button1.onclick = function () {
		cart.addItemToCart(it1);
		let description = getDescription(cart);
		cartZone.innerHTML = description;
		console.log('Button1');
	};

	var button2 = document.createElement('button');
	button2.innerHTML = 'Buy it!';
	button2.onclick = function () {
		cart.addItemToCart(it2);
		let description = getDescription(cart);
		cartZone.innerHTML = description;
		console.log('Button2');
	};

	item1.appendChild(button1);
	catalog.appendChild(item1);

	item2.appendChild(button2);
	catalog.appendChild(item2);

	wrap.appendChild(catalog)
	wrap.appendChild(cartZone);

	document.body.appendChild(wrap);
}

window.addEventListener('load', routine);
