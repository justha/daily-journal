/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */



// This is the new API fetch call
let entries = []

export const getEntries = () => {
    return fetch ("http://localhost:8088/entries")// Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(entriesArray => {
        // What should happen when we finally have the array?
        entries = entriesArray
    })
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useEntries = () => {
    return entries.slice()
    // .sort((currentEntry, nextEntry) =>
    //     Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    // )
}
