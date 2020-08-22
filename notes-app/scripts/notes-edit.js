const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const lastUpdated = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find( (note) => note.id === noteId)

if (!note) {
    location.assign('/Projects/notes-app/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
lastUpdated.textContent = generateLastEdit(note.updatedAt)

titleElement.addEventListener('input',  (e) => {
    note.title = e.target.value
    const timestamp1 = moment().valueOf()
    note.updatedAt = timestamp1
    lastUpdated.textContent = generateLastEdit(note.updatedAt)
    saveNotes(notes)

})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    const timestamp1 = moment().valueOf()
    note.updatedAt = timestamp1
    lastUpdated.textContent = generateLastEdit(note.updatedAt)
    saveNotes(notes)

})

removeElement.addEventListener('click',  (e) => {
    removeNote(note.id)
    const timestamp1 = moment().valueOf()
    note.updatedAt = timestamp1
    saveNotes(notes)
    location.assign('/Projects/notes-app/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        let notes = getSavedNotes()
        let note = notes.find((note) => note.id === noteId)

        if (!note) {
            location.assign('/Projects/notes-app/index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
        lastUpdated.textContent = generateLastEdit(note.updatedAt)
    }

})

