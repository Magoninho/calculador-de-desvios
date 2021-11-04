function splitToInt(string, separator) {
	let splited = string.split(separator);
	let splitedNumbers = [];
	for (let i = 0; i < splited.length; i++) {
		const number = parseFloat(splited[i]);
		splitedNumbers.push(number);
	}
	console.log(splitedNumbers);
	return splitedNumbers;
}

// função que calcula média
function avarage(numbers) {
	let sum = 0.0;
	for (let n = 0; n < numbers.length; n++) {
		sum += numbers[n];
	}

	return sum / numbers.length;
}

function addInput(div) {
	let input = document.createElement("INPUT");
	let lineBreak = document.createElement("br");
	lineBreak.className = "input_break";
	input.type = "text";
	input.classList.add("input");
	document.getElementById(div).appendChild(input);
	document.getElementById(div).appendChild(lineBreak);
}

function removeInput(div) {
	let inputList = document.getElementsByClassName("input");
	let lastInput = inputList[inputList.length - 1];
	let lineBreakList = document.getElementsByClassName("input_break");
	let lastLineBreak = lineBreakList[lineBreakList.length - 1];
	
	if (inputList.length == 1) return;

	document.getElementById(div).removeChild(lastInput);
	document.getElementById(div).removeChild(lastLineBreak);
}