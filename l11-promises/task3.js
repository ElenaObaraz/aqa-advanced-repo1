//Функція для отримання todo
async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    } catch (error) {
        console.error('Помилка при отриманні Todo: ', error);
    }
}

//Функція для отримання user
async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    } catch (error) {
        console.error('Помилка при отриманні User: ', error);
    }
}
 
//Використання Promise.all
const allResult = Promise.all([getTodo(), getUser()])
  .then(([todo, user]) => {
    console.log('Todo: ', todo);
    console.log('User: ', user);
  })
  .catch(error => {
        console.error('Помилка в Promise.all: ', error);
  });

//Використання Promise.race
const firstResult = Promise.race([getTodo(), getUser()])
  .then(result => console.log('Перша відповідь: ', result))
  .catch(error => {
        console.error('Помилка в Promise.race: ', error);
  });