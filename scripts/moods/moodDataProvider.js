let moods = []

export const getMoods = () => {
    return fetch ("http://localhost:8088/moods")// Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(moodsArray => {
        // What should happen when we finally have the array?
        moods = moodsArray
    })
}

export const useMoods = () => {
    return moods.slice()
}