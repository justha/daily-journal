/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

 const eventHub = document.querySelector(".container__content")

// dispatch state change event
export const stateChange = () => {
    const customEvent = new CustomEvent("stateChanged")
    eventHub.dispatchEvent(customEvent)
}


// This is the new API fetch call
let entries = []

export const getEntries = () => {
    return fetch ("http://localhost:8088/entries?_expand=mood")// Fetch from the API
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
    // )
}

// save -- use `fetch` with the POST method to add new entry to API
export const saveEntry = (entry) => {   
    return fetch ("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(getEntries)       // <-- Get all journal entries
        .then(stateChange)    // <-- Broadcast the state change even
    }