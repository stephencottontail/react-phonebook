import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import type { Contact, Entry } from '../types'

interface Props {
  active: number;
  contacts: Contact[];
  setContacts: Dispatch<SetStateAction<Array<Contact>>>;
  entries: Entry[] | null;
}

export function Journal({ active, contacts, setContacts, entries }: Props) {
  const [isAddingEntry, setIsAddingEntry] = useState(false)

  const locale: string = 'en-US' // problematically assume user locale
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  function parseAndSanitizeMarkdown(markdown: string): string {
    const usHTML: string = marked.parse(markdown) as string
    const sHTML: string = DOMPurify.sanitize(usHTML)

    return sHTML
  }

  function addEntry(formData: FormData) {
    const usMarkdown: FormDataEntryValue = formData.get('markdown') as string
    const sHTML = parseAndSanitizeMarkdown(usMarkdown)

    const newEntry: Entry = {
      date: new Date(),
      content: sHTML
    }

    if (contacts[active]['entries'] != null) {
      contacts[active]['entries'].push(newEntry)
      setContacts(contacts)
      setIsAddingEntry(false)
    }
  }

  return (
    <div className='journal'>
      { entries != null && entries.length
        ? (
          <div className='journal__entries'>
            { entries.map((el: Entry, i: number) => {
              const sHTML: string = parseAndSanitizeMarkdown(el.content)

              return (
                <article
                  key={`journal-${i}`}
                >
                  <header>
                    <p>{el.date.toLocaleDateString(locale, options)}</p>
                  </header>
                  <div dangerouslySetInnerHTML={{ __html: sHTML }} />
                </article>
              )
            })}
          </div>
        )
        : (
          <div><p>No Entries</p></div>
        )
      }
      <div className='journal__controls'>
        { isAddingEntry && (
          <form className='journal__form' action={addEntry}>
            <p>{new Date().toLocaleDateString(locale, options)}</p>
            <textarea name='markdown'></textarea>
            <p>You can use <a href='https://daringfireball.net/projects/markdown/' target='_blank' rel='noopener noreferrer'>Markdown</a></p>
            <button>Save</button>
          </form>
        )}
        <div className='journal__controls__buttons'>
          { ! isAddingEntry && (
            <button
              onClick={ () => {
                setIsAddingEntry(true)
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
