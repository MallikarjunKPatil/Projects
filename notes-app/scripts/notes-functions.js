// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    return notesJSON ? JSON.parse(notesJSON) : []
}

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {

    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    
    const statusEl = document.createElement('p')
    const button = document.createElement('button')

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }

    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    //setup the link
    noteEl.setAttribute('href', `/Projects/notes-app/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    //setup the status message
    statusEl.textContent = generateLastEdit(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    // Setup the remove note button
    button.textContent = 'x'
    button.classList.add('remove-button')
    noteEl.appendChild(button)
    button.addEventListener('click',  () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    return noteEl
}

// Sorting Notes
const sortNotes =  (notes, sortedBy) => {
    if (sortedBy === 'byEdited') {
        return notes.sort( (a, b) => {
            if (a.updatedAt > b.updatedAt) { return -1 }
            else if (a.updatedAt < b.updatedAt) { return 1 }
            else { return 0 }
        })

    }
    else if (sortedBy === 'byCreated'){
        return notes.sort((a,b) => {
            if (a.createdAt > b.createdAt) { return -1}
            else if (a.createdAt < b.createdAt) { return 1}
            else { return 0}
        })
    }
    else if (sortedBy === 'alphabetical'){
        return notes.sort((a,b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()){ return -1}
            else if (a.title.toLowerCase() > b.title.toLowerCase() ){ return 1}
            else {return 0}
        })
    }
    
    else { return notes}


}

// Render application notes
const renderNotes = (notes, filters) => {

    const noteEl =document.querySelector('#notes')

    notes = sortNotes(notes, filters.sortedBy)
    const filteredNotes = notes.filter( (note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    noteEl.innerHTML = ''

    if (filteredNotes.length > 0){
            filteredNotes.forEach((note) => {
            const notesEl = generateNoteDOM(note)
            noteEl.appendChild(notesEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent='No notes to show'
        emptyMessage.classList.add('empty-message')
        noteEl.appendChild(emptyMessage)
    }


}

// Generate the last edited function
const generateLastEdit = (timestamp) => `Last edited: ${moment(timestamp).fromNow()}`