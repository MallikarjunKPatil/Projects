import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let todos = []


// loadTodos
// Arguments: none
const loadTodos = () => {
    const todoJSON = localStorage.getItem('todos')
    try{
        return todoJSON ? JSON.parse(todoJSON) : []
    }
    catch(e)
    {
        return[]
    }
    
}
// Return value: none

// saveTodos
// Arguments: none
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}
// Return value: none


// getTodos
// Arguments: none
const getTodos = () => todos
// Return value: todos array

// createTodo
// Arguments: todo text
const createTodo =(text) =>{
    if (typeof text === 'string')
    {
        todos.push(
            { 
            id:uuidv4(), 
            text, 
            taskCompleted : false
            })
        saveTodos()
    }
}
// Return value: none


// removeTodo
// Arguments: id of todo to remove
const removeTodo = (id) =>{
    const todoIndex = todos.findIndex( (todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
    saveTodos()
}
// Return value: none

// toggleTodo
// Arguments: id of todo to toggle
const toggleTodo = (id) => {
    todos.find( (todo) => { 
        if(todo.id === id){
            todo.taskCompleted = !todo.taskCompleted
            saveTodos()
        }
    })
}
// Return value: none

// Make sure to call loadTodos and setup the exports
todos = loadTodos()

export {getTodos,createTodo,removeTodo,toggleTodo,saveTodos,loadTodos}