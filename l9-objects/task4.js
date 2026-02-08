const person = {
    firstName: "Леся",
    lastName: "Микитюк",
    age: 38
};

person.email = "pifot15522@icubik.com";

delete person.age;
console.log(person);