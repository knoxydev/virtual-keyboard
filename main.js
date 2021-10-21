let data = {
	board_blc: document.getElementById("keyboard-block"),
}

let latin_base = [
	["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BacksPace"],
	["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "|"],
	["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"], 
	["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift2"],
	["Ctrl", "Alt", "Space", "Alt"]
];
let cyrillic_base = [
	"ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BacksPace",
	"Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "|",
	"CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", 
	"Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift2",
	"Ctrl", "Alt", "Space", "Alt"
];

let drawKeys = (x, obj) => {
	for (i of latin_base[x]) {
		let div = document.createElement("div");
		div.innerHTML = i;

		if (i == "BacksPace") div.setAttribute("class", "key-backspace");
		else if (i == "Tab") div.setAttribute("class", "key-tab");
		else if (i == "CapsLock") div.setAttribute("class", "key-capslock");
		else if (i == "Enter") div.setAttribute("class", "key-enter");
		else if (i == "Shift") div.setAttribute("class", "key-shift");
		else if (i == "Shift2") div.setAttribute("class", "key-shift-two");
		else if (i == "Ctrl") div.setAttribute("class", "key-ctrl");
		else if (i == "Space") div.setAttribute("class", "key-space");

		obj.append(div);
		data.board_blc.append(obj);
	}
}
 
window.onload = () => {
	drawKeys(Number(0), document.createElement("div"));
	drawKeys(Number(1), document.createElement("div"));
	drawKeys(Number(2), document.createElement("div"));
	drawKeys(Number(3), document.createElement("div"));
	drawKeys(Number(4), document.createElement("div"));
}

