const add = function(a, b) {
	const num = a + b;
  return num; 
};

const subtract = function(a, b) {
  return a - b; 
	
};

const sum = function(value) {
	let totals = value.reduce((sum, current) => sum + current, 0);
  return totals;
};

const multiply = function(values) {
  const x = values.reduce((a, b) => a * b, 1);
  return x;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let factnum = 1
  for (let i = 1; i <= a; i++) {
   factnum = factnum * i 
  }
  return factnum; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
