/**
 * 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/

function createTable() { 
	let row, cell, i;
	let letter = 0;
	let y = 0;
	let chessboard = document.createElement('chessboard');

	for(i = 0; i <= 8; i++){
		row = document.createElement('tr');
		row.style.width = '30px';
		row.style.height = '30px';
		row.style.verticalAlign = 'middle';
		row.style.textAlign = 'center';
		if(i !== 0){
			row.innerHTML = i;
			y = 1;
		}
		for(; y <= 8; y++){
			cell = document.createElement('td');
			cell.style.width = '30px';
			cell.style.height = '30px';
			cell.style.textAlign = 'center';
			cell.style.verticalAlign = 'middle';
			if (letter !== 0 && i === 0){
				cell.innerHTML = String.fromCharCode(64 + letter);
			}
			letter++;
			if(i !== 0){
				cell.style.border = '1px solid black';
				cell.style.backgroundColor = 'red';
				if(y % 2 == i % 2)
					cell.style.backgroundColor = 'black';
			}
			row.appendChild(cell);
		}
		y = 0;
		letter = 0;
		chessboard.appendChild(row);
	}
	document.body.appendChild(chessboard);
};

window.onload = createTable;

/**
window.onload = function createTable() { 
	let row, cell, i;
	let chessboard = document.createElement('chessboard');

	for(i = 0; i <= 8; i++){
		row = document.createElement('tr');
		row.style.width = '30px';
		row.style.height = '30px';
		row.style.verticalAlign = 'middle';
		row.style.textAlign = 'center';
		if(i !== 0){
			row.innerHTML = i;
		}
		for(y = 0; y <= 8; y++){
			cell = document.createElement('td');
			cell.style.width = '30px';
			cell.style.height = '30px';
			cell.style.textAlign = 'center';
			cell.style.verticalAlign = 'middle';
			if (y !== 0 && i === 0){
				cell.innerHTML = String.fromCharCode(64 + y);
			}
			if(i !== 0){
				cell.style.border = '1px solid black';
				cell.style.backgroundColor = 'red';
				if(y % 2 == i % 2)
					cell.style.backgroundColor = 'black';
			}
			row.appendChild(cell);
		}
		chessboard.appendChild(row);
	}
	document.body.appendChild(chessboard);
};
 */