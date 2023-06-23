const input = document.getElementById('input-box');
const todosUL = document.getElementById('todos');
const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach(todo => addTodo(todo));
}

function updateLS() {
    let todosEl = document.querySelectorAll('li');

    const todos = [];
    todosEl.forEach(todoEl => {
      todos.push({
        text: todoEl.innerText,
        completed: todoEl.classList.contains('completed')
      })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}

function addTodo(todo) {
    let todoText = input.value
    if (todo) {
      todoText = todo.text;
    }
    if (todoText) {
      const todoEl = document.createElement('li');
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class="fas fa-trash"><i>';
      trashButton.classList.add("trash-btn");
      todoEl.appendChild(trashButton);



      if (todo && todo.completed) {
        todoEl.classList.add('completed')
      }
      todoEl.innerText = todoText
      todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed')
        updateLS()
      })

      todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        todoEl.remove()
        updateLS()
      })
      todosUL.appendChild(todoEl)
      input.value = '';
      updateLS();
    }
  }