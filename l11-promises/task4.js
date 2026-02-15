class Todo {
    async getTodo() {
       try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
          return await response.json();
       } catch (error) {
           console.error('Помилка при отриманні Todo: ', error);
       }
    }
}

class User {
    async getUser() {
       try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
          return await response.json();
       } catch (error) {
           console.error('Помилка при отриманні User: ', error);
       }
    }
}

const todo = new Todo();
const user = new User();

const allResult = Promise.all([todo.getTodo(), user.getUser()])
  .then(([todo, user]) => {
    console.log('Todo: ', todo);
    console.log('User: ', user);
  })
  .catch(error => {
        console.error('Помилка в Promise.all: ', error);
  });

const firstResult = Promise.race([todo.getTodo(), user.getUser()])
  .then(result => console.log('Перша відповідь: ', result))
  .catch(error => {
        console.error('Помилка в Promise.race: ', error);
  });