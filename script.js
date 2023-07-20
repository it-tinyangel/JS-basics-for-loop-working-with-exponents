// calculation of exponentiation (get the number and power from the user)
// compute all possible options with a for loop
// using one "for" loop
// degree can be positive, negative, or 0
// a^b = a*a b times;
// a^-b= 1/a^b;
// a^0 = 1;

const base = parseFloat(prompt("Enter number:")); // the function parseFloat returns a floating-point number
const exponent = parseInt(prompt("Enter Exponentiation:")); // the function parseInt returns an integer

if (isNaN(base) || isNaN(exponent)) // the function isNaN(value) checking value for being NaN
	alert("You entered uncorrect value. please, try again.") //if isNaN(value) is true, a message will be written
else {
	let result = 1;

	for (let i = 0; i < exponent || i < -exponent; i++) {
		if (exponent > 0)
			result *= base; // a^b = a*a b times - multiplication of a number by itself a specified number of times
		else if (exponent < 0)
			result /= base; // a^-b= 1/a^b - negative degree, if the exponent has a negative value
		else
			result = 1; // a^0 = 1 - any number to the zero power is always 1
	}
	document.write(`<h2>${base} ^ ${exponent} = ${result}</h2>`);
}
