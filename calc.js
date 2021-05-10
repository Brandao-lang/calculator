const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	if (mathSymbol == "+") {
		let sum = num1 + num2
		console.log("the answer is " + sum)
	}

	else if (mathSymbol == "-") {
		let diff = num1 - num2
		console.log("the answer is " + diff)
	}

	else if (mathSymbol == "*") {
		let multi = num1 * num2
		console.log("the answer is " + multi)
	}

	else if (mathSymbol =="/") {
		let divide = num1/num2
		console.log("the answer is " + divide)
	}

	else if (mathSymbol = "root") {
		squareRoot = Math.sqrt(num1)
		console.log("the answer is " + squareRoot)
	}






	// This line closes the connection to the command line interface.
	reader.close()

});
