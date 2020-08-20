/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

import { useEntries, getEntries } from "./LogDataProvider.js"
import { logHtml } from "./LogHtml.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".container__list")


const renderList = (entries) => {
    let htmlRepresentations = ""

    entries.forEach(entry => {
        htmlRepresentations += logHtml(entry)
    })

    contentTarget.innerHTML = `
        <h2>Log</h2>
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
