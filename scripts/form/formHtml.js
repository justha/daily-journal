const contentTarget = document.querySelector(".container__form")

export const form = () => {
    contentTarget.innerHTML = `
        <section class="journalEntryForm">
            <form action="">
                <fieldset>
                    <label for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>

                <fieldset>
                    <label for="journalConcept">Concepts Covered</label>
                    <textarea name="journalConcept" id="journalConcept" cols="30" rows="1"></textarea>
                </fieldset>

                <fieldset>
                    <label for="journalEntry">Journal Entry</label>
                    <textarea name="journalEntry" id="journalEntry" cols="30" rows="3"></textarea>
                </fieldset>

                <fieldset>
                    <label for="journalMood">Mood</label>
                    <select name="journalMood" id="journalMood">
                        <option value="ok">Ok</option>
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="excited">Excited</option>
                        <option value="energetic">Energetic</option>
                        <option value="jittery">Jittery</option>
                    </select>
                </fieldset>
            </form>

            <button type="button" id="button__save">Record Entry</button>

        </section>
    `
}