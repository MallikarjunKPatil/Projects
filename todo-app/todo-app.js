const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}


/*//Remove paragraph which contains the word in it.
const paras = document.querySelectorAll('p')
paras.forEach(function (para) {
    if(para.textContent.includes('the')){
        para.remove()
    }
    
})*/

renderTods(todos, filters)


/*// You have 2 tods left (p element)
const incompleteTods = todos.filter(function (todo) {
    return !todo.taskCompleted
})
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTods.length} tods left`
document.querySelector('body').appendChild(summary)

// Add a p for each incomplete todo above (use text property)
incompleteTods.forEach(function (todo) {
    const summary = document.createElement('p')
    summary.textContent = todo.text
    document.querySelector('body').appendChild(summary)
})*/

// //listen for new todo creation
// document.querySelector('#button').addEventListener('click', function () {
//     console.log('Button clicked');
// })

// //listen for todo text change
// document.querySelector('#input').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

document.querySelector('#input').addEventListener('input',  (e) => {
    filters.searchText = e.target.value
    renderTods(todos, filters)
})

document.querySelector('#input-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Add new item to the todos array with that text data (completed value of false)
    if(e.target.elements.newTodoItem.value){
        todos.push({ id:uuidv4(), text : e.target.elements.newTodoItem.value , taskCompleted : false})
        saveTodos(todos)
        // Rerender application
        renderTods(todos, filters)
    }else {
        alert('Please enter some todo value')
        // const summary = document.createElement('p')
        // summary.textContent = `Please enter todo value`
        // document.querySelector('#input-form').appendChild(summary)
    }
  
    // Clear the input field value
    e.target.elements.newTodoItem.value = ''
})

// Create a checkbox and setup event listener -> "Hide completed"
document.querySelector('#checkboxID').addEventListener('change',  (e) => {
    console.log(e.target.checked);
    filters.hideCompleted = e.target.checked
    renderTods(todos, filters)
})








