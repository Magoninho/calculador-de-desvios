/**
 * 
 * @param {numbers} Array
 */

function desvioRelativo(numbers) {
	let avg = avarage(numbers);
	let desvios = [];

	for (let i = 0; i < numbers.length; i++) {
		const number = numbers[i];
		desvios.push(number - avg);
	}
	return desvios;
}