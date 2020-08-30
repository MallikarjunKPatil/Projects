import { getFilters } from './filters'
import {getTodos,toggleTodo,removeTodo,saveTodos} from './todos'

// renderTodos
// Arguments: none
const renderTodos = () => {
    
    const newTodosEl=  document.querySelector('#newTodos')

    // filtering todo list based on typed search text
    const todos= getTodos()
    const filters= getFilters()

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
// Return value: none


// generateTodoDOM
// Arguments: todo
const generateTodoDOM = (todo) => {

    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const chekBox = document.createElement('input')
    const summary = document.createElement('span')
    const button = document.createElement('button')

    //setup the checkbox attribute
    chekBox.setAttribute('type', 'checkbox')
    chekBox.checked = todo.taskCompleted
    chekBox.addEventListener('click', (e) => {
        toggleTodo(todo.id)
        renderTodos()
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
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
    
}
// Return value: the todo element

// generateSummaryDOM
// Arguments: incompletedTodos
const generateSummaryDOM = (incompletedTodos) =>{
        
    const plural = incompletedTodos.length === 1 ? '':'s'

    const summary = document.createElement('h2')
    summary.classList.add('list-title')

    summary.textContent = `You have ${incompletedTodos.length} todo${plural} left`

    return summary
}
// Return value: the summary element

// Make sure to set up the exports
export {renderTodos,generateTodoDOM,generateSummaryDOM}