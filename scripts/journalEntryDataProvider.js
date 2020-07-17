/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/07/2020",
        concept: "HTML & CSS",
        entry: "Discussed HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    }, 
    {
        id: 2,
        date: "07/10/2020",
        concept: "GitHub Workflow",
        entry: "Discussed best methods for managing the master and other working branches.",
        mood: "Ok"
    }, 
    {
        id: 3,
        date: "07/14/2020",
        concept: "Modular Code",
        entry: "Covered importance of single responsibility and ways to automate hard-coded HTML using arrays of objects.",
        mood: "Ok"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}