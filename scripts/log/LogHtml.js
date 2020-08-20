/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 * 
 *  *  Display the entry's full text, and the date it was entered below.
 * 
 */

import { deleteEntry } from "./LogDataProvider.js";
const eventHub = document.querySelector(".container__content")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteButton--")) {
        const [prompt, entryId] = clickEvent.target.id.split("--")
        deleteEntry(entryId)
    }
})



export const logHtml = (entry) => {
    return `
        <section class="log__card" id="entry--${entry.id}">
            <article class="log__history">
                <div><b>Date: </b>${entry.date}</div>
                <div><b>Concept: </b>${entry.concept}</div>
                <div><b>Note: </b>${entry.note}</div>
                <div><b>Mood: </b>${entry.mood.label}</div>
            </article>
            <button class="deleteButton" id="deleteButton--${entry.id}">Delete Entry</button>
            <br>
            <br>
        </section>
    `
} 