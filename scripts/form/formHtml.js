import { saveEntry } from "../log/LogDataProvider.js";

const eventHub = document.querySelector(".container__content")
const contentTarget = document.querySelector(".container__form")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveButton") {
        const formDate = document.querySelector("#form--date")
        const formConcept = document.querySelector("#form--concept")
        const formNote = document.querySelector("#form--note")
        const formMood = document.querySelector("#form--mood")
        
        const entry = {
            date: formDate.value, 
            concept: formConcept.value,
            note: formNote.value, 
            mood: formMood.value
        }
        saveEntry(entry)        
    }
})


export const form = () => {
    contentTarget.innerHTML = `
        <section class="journalEntryForm">
            <form action="">
                <fieldset>
                    <label for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="form--date">
                </fieldset>

                <fieldset>
                    <label for="journalConcept">Concepts Covered</label>
                    <textarea name="journalConcept" cols="30" rows="1" id="form--concept"></textarea>
                </fieldset>

                <fieldset>
                    <label for="journalEntry">Journal Entry</label>
                    <textarea name="journalEntry" cols="30" rows="3" id="form--note"></textarea>
                </fieldset>

                <fieldset>
                    <label for="journalMood">Mood</label>
                    <select name="journalMood" id="form--mood">
                        <option value="ok">Ok</option>
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="excited">Excited</option>
                        <option value="energetic">Energetic</option>
                        <option value="jittery">Jittery</option>
                    </select>
                </fieldset>
            </form>

            <button type="button" id="saveButton">Record Entry</button>

        </section>
    `
}