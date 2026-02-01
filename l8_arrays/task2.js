const numbers = new Array(1, 2, 3, 4, 5);

const numbersCount = numbers.map((number, index) => {
    return number * index;
});

console.log(numbersCount);