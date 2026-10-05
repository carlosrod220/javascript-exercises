const fibonacci = function (num) {
    const intNum = Number(num);
    const ERROR = 'OOPS';
    let fibarray = [0, 1, 1];
    
    if (intNum < 0)
        return ERROR;

    for (let i = 3; i <= intNum; i++) {
       const newNum = fibarray[i - 1] + fibarray[i - 2];
        fibarray.push(newNum);
    }
    return fibarray[intNum];
}


console.log(fibonacci(2));


// Do not edit below this line
module.exports = fibonacci;
