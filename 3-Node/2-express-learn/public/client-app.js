
console.log('-client-app-')

 
// using DOM API
let todosBtn = document.querySelector('.btn-dark')
let todoList = document.getElementById('todo-list');
todosBtn.addEventListener('click', e => {
    // using Fetch API
    let promise = fetch('/todos')
    promise
        .then(response => response.json())
        .then(todos => {
            todoList.innerHTML = todos.map(todo => `<li class="list-group-item">${todo}</li>`).join(" ")
        })
})