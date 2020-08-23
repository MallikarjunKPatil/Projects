
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

    const newTodosEl=  document.querySelector('#newTodos')

    // filtering todo list based on typed search text
    let filteredTods = todos.filter( (todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        // Update hideCompleted an rerender list on checkbox change
        const hideCompletedTextMatch = !filters.hideCompleted || !todo.taskCompleted
        return searchTextMatch && hideCompletedTextMatch
    }
    )
    //refrehing new html page
    newTodosEl.innerHTML = ''

    // filtering incomplete Tods
    const incompleteTods = filteredTods.filter( (todo) => !todo.taskCompleted)
    newTodosEl.appendChild(generateSummaryDOM(incompleteTods))

    // Add a p for each filtered Tods todo above (use text property)
    if(filteredTods.length > 0)
    {
            filteredTods.forEach( (todo) => {
                newTodosEl.appendChild(generateTodoDOM(todo))
            })
    }
    else
    {
        const emptyMessageEl = document.createElement('p')
        emptyMessageEl.classList.add('empty-message')
        emptyMessageEl.textContent='No to-dos to Show'
        newTodosEl.appendChild(emptyMessageEl)

    }
    

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
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
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
    containerEl.appendChild(chekBox)

    //setup the todo title text
    summary.textContent = todo.text
    containerEl.appendChild(summary)

    //setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)
        

    //setup remove todo button
    button.textContent = 'X'
    button.classList.add('button','button--text')
    todoEl.appendChild(button)

    return todoEl
}


//Get the DOM elements for list summary
const generateSummaryDOM =  (incompleteTods) => {
    
    const plural = incompleteTods.length === 1 ? '':'s'

    const summary = document.createElement('h2')
    summary.classList.add('list-title')

    summary.textContent = `You have ${incompleteTods.length} todo${plural} left`

    return summary
}


