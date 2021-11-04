// Tudo em prol da ciência

function desvioRelativo(numbers) {
	let avg = avarage(numbers);
	let desvios = [];

	for (let i = 0; i < numbers.length; i++) {
		const number = numbers[i];
		desvios.push(number - avg);
	}
	return desvios;
}

function desvioAbsoluto(numbers) {
	let desvios = [];
	for (let i = 0; i < desvioRelativo(numbers).length; i++) {
		const number = desvioRelativo(numbers)[i];
		desvios.push(Math.abs(number));
	}
	return desvios;
}

function desvioRelativoResult(results) {
	let div = document.getElementById("result");

	div.innerHTML = `
	<h1>Resultado: </h1>
	`;

	for (let n = 0; n < results.length; n++) {
		const result = results[n];
		let span = document.createElement("span");
		span.className = "math";
		span.innerHTML +=
		`D_r(x_{${n + 1}}) = x_{${n + 1}} - \\bar{x} = ${result}`;
		div.appendChild(span);
		div.innerHTML += "<br>";
	}
	let math = document.getElementsByClassName("math");
	for (let m = 0; m < math.length; m++) {
		const element = math[m];
		katex.render(element.textContent, element);
	}
}

function desvioAbsolutoResult(results) {
	let div = document.getElementById("result");

	div.innerHTML = `
	<h1>Resultado: </h1>
	`;

	for (let n = 0; n < results.length; n++) {
		const result = results[n];
		let span = document.createElement("span");
		span.className = "math";
		span.innerHTML +=
		`D_r(x_{${n + 1}}) = |x_{${n + 1}} - \\bar{x}| = ${result}`;
		div.appendChild(span);
		div.innerHTML += "<br>";
	}
	let math = document.getElementsByClassName("math");
	for (let m = 0; m < math.length; m++) {
		const element = math[m];
		katex.render(element.textContent, element);
	}
}

