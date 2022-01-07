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

function getDescription(cart) {
	let description = "<h1>Состав корзины:</h1>";
	let str = getStr(cart);
	let sum = '<br> Total: ' + cart.countCartPrice();
	return (description + str + sum);
}

function setAddress(button4) {
	let br = document.createElement("br");
	let address = document.createElement("div");
	address.className = 'address';

	let title = "<h1>Адрес доставки</h1>";

	let form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "#");

	var name = document.createElement("input");
	name.setAttribute("type", "text");
	name.setAttribute("name", "FullName");
	name.setAttribute("placeholder", "Full Name");

	var region = document.createElement("input");
	region.setAttribute("type", "text");
	region.setAttribute("name", "Country");
	region.setAttribute("placeholder", "Country");

	let city = document.createElement("input");
	city.setAttribute("type", "text");
	city.setAttribute("city", "City");
	city.setAttribute("placeholder", "City");

	let street = document.createElement("input");
	street.setAttribute("type", "text");
	street.setAttribute("city", "Street");
	street.setAttribute("placeholder", "Street");

	let house = document.createElement("input");
	house.setAttribute("type", "number");
	house.setAttribute("house", "houseNumber");
	house.setAttribute("placeholder", "Number of house");

	let apt = document.createElement("input");
	apt.setAttribute("type", "number");
	apt.setAttribute("apt", "apartments");
	apt.setAttribute("placeholder", "Apartment");

	let s = document.createElement("input");
	s.setAttribute("type", "submit");
	s.setAttribute("value", "Submit");

	form.appendChild(name);
	form.appendChild(br.cloneNode());
	form.appendChild(region);
	form.appendChild(br.cloneNode());
	form.appendChild(city);
	form.appendChild(br.cloneNode());
	form.appendChild(street);
	form.appendChild(br.cloneNode());
	form.appendChild(house);
	form.appendChild(br.cloneNode());
	form.appendChild(apt);
	form.appendChild(br.cloneNode());
	form.appendChild(s);

	address.innerHTML = title;
	address.appendChild(form);
	address.appendChild(button4);

	return (address);
}

window.addEventListener('load', function () {
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
	let cart = initCart();

	let description = getDescription(cart);
	cartZone.innerHTML = description;

	let button1 = document.createElement('button');
	button1.innerHTML = 'Buy it!';
	button1.onclick = function () {
		cart.addItemToCart(it1);
		let description = getDescription(cart);
		cartZone.innerHTML = description;
		cartZone.appendChild(document.createElement("br"));
		cartZone.appendChild(button3);
		console.log('Button1');
	};

	let button2 = document.createElement('button');
	button2.innerHTML = 'Buy it!';
	button2.onclick = function () {
		cart.addItemToCart(it2);
		let description = getDescription(cart);
		cartZone.innerHTML = description;
		cartZone.appendChild(document.createElement("br"));
		cartZone.appendChild(button3);
		console.log('Button2');
	};

	let button4 = document.createElement('button');
	button4.innerHTML = 'Next';
	button4.onclick = function () {
		cartZone.innerHTML = " ";
		let br = document.createElement("br");
		let form = document.createElement("form");
		form.setAttribute("method", "post");
		form.setAttribute("action", "#");

		let comment = document.createElement("textarea");
		comment.setAttribute('maxlength', 150);

		let s = document.createElement("input");
		s.setAttribute("type", "submit");
		s.setAttribute("value", "Submit");

		form.appendChild(comment);
		form.appendChild(br.cloneNode());
		form.appendChild(s);
		cartZone.innerHTML = "<h1>Комментарий</h1>";
		cartZone.appendChild(form);
	}

	let button3 = document.createElement('button');
	button3.innerHTML = 'Next';
	button3.onclick = function () {
		cartZone.innerHTML = " ";
		address = setAddress(button4);
		cartZone.appendChild(address);
	}

	item1.appendChild(button1);
	catalog.appendChild(item1);

	item2.appendChild(button2);
	catalog.appendChild(item2);

	wrap.appendChild(catalog)
	wrap.appendChild(cartZone);

	cartZone.appendChild(document.createElement("br"));
	cartZone.appendChild(button3);

	document.body.appendChild(wrap);
});