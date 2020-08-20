/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 * 
 *  *  Display the entry's full text, and the date it was entered below.
 * 
 */
export const logHtml = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div><b>Date: </b>${entry.date}</div>
            <div><b>Concept: </b>${entry.concept}</div>
            <div><b>Note: </b>${entry.note}</div>
            <div><b>Mood: </b>${entry.moodId}</div>
            <br>
        </section>
    `
} 