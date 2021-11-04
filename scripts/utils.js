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
function media(numbers) {
	let sum = 0.0;
	for (let n = 0; n < numbers.length; n++) {
		sum += numbers[n];
	}

	return sum / numbers.length;
}