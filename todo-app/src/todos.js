import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let todos = []

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

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

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

const removeTodo = (id) =>{
    const todoIndex = todos.findIndex( (todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
    saveTodos()
}

const toggleTodo = (id) => {
    todos.find( (todo) => { 
        if(todo.id === id){
            todo.taskCompleted = !todo.taskCompleted
            saveTodos()
        }
    })
}

//Setting todo items to todos array
todos = loadTodos()

export {getTodos,createTodo,removeTodo,toggleTodo,saveTodos,loadTodos}