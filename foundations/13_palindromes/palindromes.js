const palindromes = function (words) {
   const palindrome1 = punctuation(words);
   const palindrome2 = punctuation(words).reverse();

   for (let i = 0; i< palindrome1.length; i++){
    if (palindrome1[i] === palindrome2[i])
        return true;
    else return false;
    }   

};


// // Do not edit below this line
module.exports = palindromes;


// My code starts below

// create a function that takes in an object and turns it into an array
//go through the array and remove any punctuation
    //anything that is not a letter or number should be deleted. 



function punctuation (object) {
    let newobject = object.toUpperCase().split('');

    for (let i = 0; i < newobject.length; i++) {

        if (newobject[i] >= 'A' && newobject[i] <= 'Z') {
        }
        else if (newobject[i] >= '0' && newobject[i] <= '9') {
        }
        else {
            newobject.splice(i, 1);
            i--;
        }
    }
    return newobject;
   
}