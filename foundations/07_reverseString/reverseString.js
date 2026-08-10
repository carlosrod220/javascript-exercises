const reverseString = function(string1) {
   const arrString =  string1.split('').reverse().join('');
   return arrString;
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
