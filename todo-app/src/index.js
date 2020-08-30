// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { setFilters } from './filters'
import {loadTodos,createTodo} from './todos'
import {renderTodos} from './views'

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#input').addEventListener('input',  (e) => {
    setFilters({
        searchText : e.target.value
    })
    renderTodos()
})


// Create a checkbox and setup event listener -> "Hide completed"
document.querySelector('#checkboxID').addEventListener('change', (e) => {
    setFilters({
        hideCompleted : e.target.checked
    })
    renderTodos()
})



// Set up form submission handler
document.querySelector('#input-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const text=e.target.elements.newTodoItem.value.trim()
    // Add new item to the todos array with that text data (completed value of false)
    if(text.length > 0){
        createTodo(text)
        renderTodos()
    }else {
           alert('Please enter some todo value')
    }
    // Clear the input field value
    e.target.elements.newTodoItem.value = ''
})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        renderNotes()
        loadTodos()
    }
})


