let data = {
	board_blc: document.getElementById("keyboard-block"),
	oneKey: Number(0),
	twoKey: Number(0),
	capsLockInt: Number(0),
}

let latin_base = [
	["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
	["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
	["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"], 
	["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
	["Ctrl", "Alt", " ", "Alt"]
];
let cyrillic_base = [
	["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BacksPace"],
	["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\"],
	["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"], 
	["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift2"],
	["Ctrl", "Alt", "Space", "Alt"]
];

let drawKeys = (x, obj) => {
	for (i of latin_base[x]) {
		let div = document.createElement("div");
		div.innerHTML = i;

		if (i == "Backspace") div.setAttribute("id", "key-backspace");
		else if (i == "Tab") div.setAttribute("id", "key-tab");
		else if (i == "CapsLock") div.setAttribute("id", "key-capslock");
		else if (i == "Enter") div.setAttribute("id", "key-enter");
		else if (i == "Shift") div.setAttribute("id", "key-shift");
		else if (i == "Ctrl") div.setAttribute("id", "key-ctrl");
		else if (i == "Alt") div.setAttribute("id", "key-alt");
		else if (i == " ") div.setAttribute("id", "key-space");
		div.setAttribute("class", "board-key");

		obj.append(div);
		data.board_blc.append(obj);
	}
}


function upLowFunc() {
	function reDraw(x, y) {
		let mainBtn = ["Backspace", "Tab", "CapsLock", "Enter", "Shift", "Ctrl", "Alt"];

		if (y == Number(1)) {
			latin_base[x].forEach((item, index, arr) => {
				let symb = mainBtn.indexOf(item);
				if (symb == -1) arr[index] = arr[index].toUpperCase();
			});
		} else {
			latin_base[x].forEach((item, index, arr) => {
				let symb = mainBtn.indexOf(item);
				if (symb == -1) arr[index] = arr[index].toLowerCase();
			});
		}
	}

	if (data.capsLockInt % 2 == 0) {
		reDraw(Number(0), Number(1));
		reDraw(Number(1), Number(1));
		reDraw(Number(2), Number(1));
		reDraw(Number(3), Number(1));
		reDraw(Number(4), Number(1));

		data.board_blc.innerHTML = " ";
		startDraw();
	} else {
		reDraw(Number(0), Number(2));
		reDraw(Number(1), Number(2));
		reDraw(Number(2), Number(2));
		reDraw(Number(3), Number(2));
		reDraw(Number(4), Number(2));

		data.board_blc.innerHTML = " ";
		startDraw();
	}

	data.capsLockInt += 1;
}

function startDraw() {
	drawKeys(Number(0), document.createElement("div"));
	drawKeys(Number(1), document.createElement("div"));
	drawKeys(Number(2), document.createElement("div"));
	drawKeys(Number(3), document.createElement("div"));
	drawKeys(Number(4), document.createElement("div"));
}

window.onload = () => {
	startDraw();
}

window.addEventListener("keydown", (e) => {
	let boardKeys = document.querySelectorAll(".board-key");

	console.log(e.key, e.keyCode, data.oneKey);

	if (e.key == "Alt" && data.oneKey == Number(1)) {
		console.log("UUU");
	}

	if (e.key == "CapsLock") upLowFunc();

	for (i of boardKeys) {
		data.oneKey = (i.innerHTML == 1) ? Number(1) : Number(0);
		data.twoKey = (i.innerHTML == "1") ? Number(1) : Number(0);
		if (i.innerHTML == e.key) i.style = "background: #2C2C2C; color: white";

	}

});

window.addEventListener("keyup", (e) => {
	setTimeout(() => {
		let boardKeys = document.querySelectorAll(".board-key");

		for (i of boardKeys) {
			if (i.innerHTML == e.key) i.style = "background: white; color: black";
		}
	
	}, 25);
});
