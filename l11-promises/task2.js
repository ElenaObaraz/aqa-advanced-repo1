//Функція для отримання todo
function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())    
    .catch(error => {
        console.error('Помилка при отриманні Todo: ', error);
    });
}

//Функція для отримання user
function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())    
    .catch(error => {
        console.error('Помилка при отриманні User: ', error);
    });
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