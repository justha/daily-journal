/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

import { useEntries, getEntries } from "./LogDataProvider.js"
import { logHtml } from "./LogHtml.js"

const eventHub = document.querySelector(".container__content")
const contentTarget = document.querySelector(".container__list")        // DOM reference to where all entries will be rendered

/*
    Invoke the component that returns an
    HTML representation of a single entry
*/
const renderList = (entries) => {
    let htmlRepresentations = ""

    entries.forEach(entry => {
        htmlRepresentations += logHtml(entry)
    })

    contentTarget.innerHTML = `
        <h2>Historical Log</h2>
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

// re-render list upon database state change
eventHub.addEventListener("stateChanged", () => {
    const newEntries = useEntries()
    renderList(newEntries)
})