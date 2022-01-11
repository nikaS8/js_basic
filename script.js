/**
 1. Продолжаем реализовывать модуль корзины:
	a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
	b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.

 2. У товара может быть несколько изображений. При клике на изображение изменять картинку для показа
 */

var items = [
	{id: 1, name: 'T-shirt ', price: 10, quantity: 1}, 
	{id: 2, name: 'Skirt ', price: 15, quantity: 1}, 
]

function showGallery(event){
	console.log(event);

	let img = document.getElementById('imgClickAndChange');	
	if(img.getAttribute('src') == './img/tshirt.png'){
		img.src = './img/black-tshirt.jpeg';
	}
	else{
		img.src = './img/tshirt.png';
	}
}

function showGallery1(event){
	console.log(event);

	let img1 = document.getElementById('imgClickAndChange1');
	if(img1.getAttribute('src') == './img/skirt.jpeg'){
		img1.src = './img/skirt1.jpeg';
	}
	else{
		img1.src = './img/skirt.jpeg';
	}
}

function getItem1() {
	let item1 = document.createElement('div');
	item1.className = 'item1';
	item1.style.marginTop = '50%';
	item1.style.marginLeft = '20%';
	item1.style.paddingBottom = '20px';
	item1.innerHTML = items[0].name + items[0].price + '$ ';
	let linebreak = document.createElement('br');
	item1.appendChild(linebreak);
	let img = document.createElement('img');
	img.src = './img/tshirt.png';
	img.id = 'imgClickAndChange';
	item1.appendChild(img);
	img.addEventListener('click', showGallery);
	return (item1);
}

function getItem2() {
	let item2 = document.createElement('div');
	item2.className = 'item2';
	item2.style.marginLeft = '20%';
	item2.innerHTML = items[1].name + items[1].price + '$ ';
	let linebreak = document.createElement('br');
	item2.appendChild(linebreak);
	let img = document.createElement('img');
	img.src = './img/skirt.jpeg';
	img.id = 'imgClickAndChange1';
	item2.appendChild(img);
	img.addEventListener('click', showGallery1);
	return (item2);
}

function initCart() {
	let cart = {
		product: [],
		addItemToCart: function (item) {
			console.log(item);
			for (let prod of cart.product) {
				if (item.id === prod.id) {
					prod.quantity += 1;
					return;
				}
			}
			cart.product.push(item);
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
	cartZone.innerHTML = '<h1>Cart</h1>';
	let cart = initCart();

	let description = getDescription(cart);
	cartZone.innerHTML = description;

	var button1 = document.createElement('button');
	button1.innerHTML = 'Buy it!';
	button1.onclick = function () {
		console.log(items[0]);
		cart.addItemToCart(items[0]);
		let description = getDescription(cart);
		cartZone.innerHTML = description;
		console.log('Button1');
	};

	var button2 = document.createElement('button');
	button2.innerHTML = 'Buy it!';
	button2.onclick = function () {
		cart.addItemToCart(items[1]);
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