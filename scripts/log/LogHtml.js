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
            <div class="">${entry.date} -- ${entry.note}</div>
        </section>
    `
} 