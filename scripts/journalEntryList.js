/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./journalEntryDataProvider.js"
import { JournalEntryComponent } from "./journalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("h3")

export const EntryListComponent = () => {
    
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    let entryHTMLRepresentation = ""
    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       
        entryHTMLRepresentation += JournalEntryComponent(entry)

        entryLog.innerHTML += `
            <article class="journalEntryList">
                ${entryHTMLRepresentation}
            </article>
        `
    }
}