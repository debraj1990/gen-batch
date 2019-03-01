


// Ex.

//---------------------------------------------------
let products = [
    { id: 1, name: 'Item-1', price: 1000.00 },
    { id: 2, name: 'Item-2', price: 2000.00 },
    { id: 1, name: 'Item-3', price: 3000.00 },
    { id: 1, name: 'Item-4', price: 4000.00 },
    { id: 1, name: 'Item-5', price: 5000.00 }
];

// get all products into new array where price>3000 

//---------------------------------------------------


class Todo {
    constructor(title) {
        Todo.nextId++;
        this.id = Todo.nextId;
        this.title = title;
        this.completed = false
    }
}
Todo.nextId = 0;

class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        //
    }
    editTodo(id, newTitle) {
        //
    }
    completedTodo(id) {
        //..
    }
    completeAll() {
        //
    }
    deleteTodo(id) {

    }
    cearCompleted() {

    }
    view(filter) {
        // filter ==> ALL | ACTIVE | INACTIVE
    }
}

const service = new TodoService();