// Set up filters default object
const filters = {
    searchText: '',
    hideCompleted: false
}

// getFilters
const getFilters = () => filters
// Arguments: none
// Return value: filters object

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }
    if (typeof updates.hideCompleted === 'boolean') {
        filters.hideCompleted = updates.hideCompleted
    }
}
// Return value: none

// Make sure to set up the exports

export {getFilters,setFilters}