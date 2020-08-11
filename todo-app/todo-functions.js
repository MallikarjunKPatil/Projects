
//Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todo')
     return todoJSON ? JSON.parse(todoJSON) : []
    
}

//Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todo', JSON.stringify(todos))
}

//Render application todos based on filters
const renderTods =  (todos, filters) => {

    // filtering todo list based on typed search text
    let filteredTods = todos.filter( (todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        // Update hideCompleted an rerender list on checkbox change
        const hideCompletedTextMatch = !filters.hideCompleted || !todo.taskCompleted
        return searchTextMatch && hideCompletedTextMatch
    }
    )
    //refrehing new html page
    document.querySelector('#newTodos').innerHTML = ''

    // filtering incomplete Tods
    const incompleteTods = filteredTods.filter( (todo) => !todo.taskCompleted)
    document.querySelector('#newTodos').appendChild(generateSummaryDOM(incompleteTods))

    // Add a p for each filtered Tods todo above (use text property)
    filteredTods.forEach( (todo) => {
        document.querySelector('#newTodos').appendChild(generateTodoDOM(todo))
    })

}

//To remove item when clicked on x
removeTodo =  (id) => {
    const todoIndex = todos.findIndex( (todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Tp set checkbox value to todo property
toggleTodo = (id,e) => {
    todos.find( (todo) => { 
        if(todo.id === id){
            todo.taskCompleted = e.target.checked
        }
    })
    
}

//Get the DOM elements for an individual note
const generateTodoDOM =  (todo) => {
    const todoEl = document.createElement('div')
    const chekBox = document.createElement('input')
    const summary = document.createElement('span')
    const button = document.createElement('button')
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTods(todos, filters)
    })



    //setup the checkbox attribute
    chekBox.setAttribute('type', 'checkbox')
    chekBox.checked = todo.taskCompleted
    chekBox.addEventListener('click', (e) => {
        toggleTodo(todo.id,e)
        saveTodos(todos)
        renderTods(todos, filters)
    })

    //setup the todo title text
    summary.textContent = todo.text
    //setup remove todo button
    button.textContent = 'x'

    todoEl.appendChild(chekBox)
    todoEl.appendChild(summary)
    todoEl.appendChild(button)

    return todoEl
}


//Get the DOM elements for list summary
const generateSummaryDOM =  (incompleteTods) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTods.length} tods left`
    return summary
}


