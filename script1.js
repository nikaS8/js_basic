/**
 * 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
   3. (*) Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., 
причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
*/

// window.onload = function createTable() { 
// 	let i, y, row, cell;
// 	let chessboard = document.createElement('chessboard');

// 	for(i = 0; i <= 8; i++){
// 		row = document.createElement('tr');
// 		row.style.width = '30px';
// 		row.style.height = '30px';
// 		row.style.verticalAlign = 'middle';
// 		row.style.textAlign = 'center';

// 		for(y = 0; y <= 8; y++){
// 			cell = document.createElement('td');
// 			cell.style.width = '30px';
// 			cell.style.height = '30px';
// 			cell.style.textAlign = 'center';
// 			cell.style.verticalAlign = 'middle';
// 			if(y === 0 && i === 0){
// 				cell.innerHTML = '';
// 			}
// 			if(y === 0 && i !== 0){
// 				cell.innerHTML = i;
// 			}
// 			if (y !== 0 && i === 0){
// 				cell.innerHTML = String.fromCharCode(64 + y);
// 			}
// 			if(y !== 0 && i !== 0){
// 				cell.style.border = '1px solid black';
// 				cell.style.backgroundColor = 'white';
// 				if(y % 2 == i % 2)
// 					cell.style.backgroundColor = 'black';
// 			}
// 			row.appendChild(cell);
// 		}
// 		chessboard.appendChild(row);
// 	}
// 	document.body.appendChild(chessboard);
// };

function createTable() {
	let i, y, row, cell;
	let chessboard = document.createElement('chessboard');

	for (i = 0; i <= 8; i++) {
		row = document.createElement('tr');
		row.style.width = '30px';
		row.style.height = '30px';
		row.style.verticalAlign = 'middle';
		row.style.textAlign = 'center';

		for (y = 0; y <= 8; y++) {
			cell = document.createElement('td');
			cell.style.width = '30px';
			cell.style.height = '30px';
			cell.style.textAlign = 'center';
			cell.style.verticalAlign = 'middle';
			if (y === 0 && i === 0) {
				cell.innerHTML = '';
			}
			if (y === 0 && i !== 0) {
				cell.innerHTML = i;
			}
			if (y !== 0 && i === 0) {
				cell.innerHTML = String.fromCharCode(64 + y);
			}
			if (y !== 0 && i !== 0) {
				cell.style.border = '1px solid black';
				cell.style.backgroundColor = 'black';
				if (y % 2 == i % 2)
					cell.style.backgroundColor = 'white';
			}
			row.appendChild(cell);
		}
		chessboard.appendChild(row);
	}
	document.body.appendChild(chessboard);
};

function createTable1() {
	let i, y, row, cell;
	let chessboard = document.createElement('chessboard');

	for (i = 0; i <= 8; i++) {
		row = document.createElement('tr');
		row.style.width = '30px';
		row.style.height = '30px';
		row.style.verticalAlign = 'middle';
		row.style.textAlign = 'center';

		for (y = 0; y <= 8; y++) {
			cell = document.createElement('td');
			cell.style.width = '30px';
			cell.style.height = '30px';
			cell.style.textAlign = 'center';
			cell.style.verticalAlign = 'middle';
			if (y === 0 && i === 0) {
				cell.innerHTML = '';
			}
			if (y === 0 && i !== 0) {
				cell.innerHTML = i;
			}
			if (y !== 0 && i === 0) {
				cell.innerHTML = String.fromCharCode(64 + y);
			}
			if (y !== 0 && i !== 0) {
				cell.style.border = '1px solid black';
				cell.style.backgroundColor = 'brown';
				if (y === 1 && i === 1 || y === 8 && i === 1) {
					cell.innerHTML = 'R';
				}
				if (y === 2 && i === 1 || y === 7 && i === 1) {
					cell.innerHTML = 'K';
				}
				if (y === 3 && i === 1 || y === 6 && i === 1) {
					cell.innerHTML = 'B';
				}
				if (y === 4 && i === 1) {
					cell.innerHTML = 'Q';
				}
				if (y === 5 && i === 1) {
					cell.innerHTML = 'KG';
				}
				if (y !== 0 && i === 2){
					cell.innerHTML = 'p';
				}
				if (y !== 0 && i === 7){
					cell.innerHTML = "<span style='color: white;'>p</span>"
				}
				if (y === 1 && i === 8 || y === 8 && i === 8) {
					cell.innerHTML = "<span style='color: white;'>R</span>";
				}
				if (y === 2 && i === 8 || y === 7 && i === 8) {
					cell.innerHTML = "<span style='color: white;'>K</span>"
				}
				if (y === 3 && i === 8 || y === 6 && i === 8) {
					cell.innerHTML = "<span style='color: white;'>B</span>"
				}
				if (y === 4 && i === 8) {
					cell.innerHTML = "<span style='color: white;'>Q</span>"
				}
				if (y === 5 && i === 8) {
					cell.innerHTML = "<span style='color: white;'>KG</span>"
				}
				if (y % 2 == i % 2) {
					cell.style.backgroundColor = 'pink';
				}
			}
			row.appendChild(cell);
		}
		chessboard.appendChild(row);
	}
	document.body.appendChild(chessboard);
};

window.addEventListener('load', createTable);
window.addEventListener('load', createTable1);