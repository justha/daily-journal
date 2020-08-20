/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

import { useEntries, getEntries } from "./JournalDataProvider.js"
import { journalHtml } from "./JournalHtml.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".log")


const renderList = (entries) => {
    let htmlRepresentations = ""

    entries.forEach(entry => {
        htmlRepresentations += journalHtml(entry)
    })

    contentTarget.innerHTML = `
        <article class="journalList">
            ${htmlRepresentations}
        </article>
    `
}

export const LogComponent = () => {
    getEntries()
    .then(useEntries)
    .then(renderList)
}













// const render = entries => {
//     // Use the journal entry data from the data provider component
//     const htmlRepresentations = entries.reverse()


//         /*
//             Invoke the component that returns an
//             HTML representation of a single entry
//         */
       
//         entryHTMLRepresentation = JEComponent(entry)

//         contentTarget.innerHTML += `
//             <article class="journalEntryList">
//                 ${entryHTMLRepresentation}
//             </article>
//         `
