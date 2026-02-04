const car1 = {
    brand: "Kia",
    model: "Ceed",
    year: 2023
};

const car2 = {
    brand: "Hyundai",
    model: "I30",
    owner: "Logistic group"
};

const car3 = {...car1, ...car2};

console.log(car3);