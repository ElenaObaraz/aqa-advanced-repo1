const users = [
    { name: "Олександр", age: 25, email: "gebiced593@hopesx.com" },
    { name: "Максим", age: 27, email: "xicosok175@hopesx.com" },
    { name: "Данило", age: 42, email: "gokab30247@hopesx.com" }
];

for (const user of users) {
    console.log(`${user.name} віком ${user.age} років, використовує електронну пошту ${user.email}`);
}

for (const { name, age, email } of users) {
    console.log(`${name} віком ${age} років, використовує електронну пошту ${email}`);
}