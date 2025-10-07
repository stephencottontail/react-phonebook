import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { baseClassName } from '../constants'
import type { Contact, Entry } from '../types'

interface Props {
  active: number;
  contacts: Contact[];
  setContacts: Dispatch<SetStateAction<Array<Contact>>>;
  entries: Entry[] | null;
}

export function Journal({ active, contacts, setContacts, entries }: Props) {
  const [isAddingEntry, setIsAddingEntry] = useState(false)
  const baseClass = `${baseClassName}__journal`

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
    <div className={`${baseClass}`}>
      { entries != null && entries.length
        ? (
          <div className={`${baseClass}__entries`}>
            { entries.map((el: Entry, i: number) => {
              const sHTML: string = parseAndSanitizeMarkdown(el.content)

              return (
                <article
                  className={`${baseClass}__entry`}
                  key={`journal-${i}`}
                >
                  <header className={`${baseClass}__entry__header`}>
                    <time className={`${baseClass}__entry__date`} dateTime={el.date.toISOString()}>{el.date.toLocaleDateString(locale, options)}</time>
                  </header>
                  <div
                    className={`${baseClass}__entry__content`}
                    dangerouslySetInnerHTML={{ __html: sHTML }}
                  />
                </article>
              )
            })}
          </div>
        )
        : (
          <div><p>No Entries</p></div>
        )
      }
      <div className={`${baseClass}__controls`}>
        { isAddingEntry && (
          <form className='journal__form' action={addEntry}>
            <time dateTime={new Date().toISOString()}>{new Date().toLocaleDateString(locale, options)}</time>
            <textarea name='markdown'></textarea>
            <p>You can use <a href='https://daringfireball.net/projects/markdown/' target='_blank' rel='noopener noreferrer'>Markdown</a></p>
            <div className={`${baseClassName}__buttons`}>
              <button className={'button button-solid'}>Save</button>
            </div>
          </form>
        )}
        <div className={`${baseClassName}__buttons`}>
          { ! isAddingEntry && (
            <button
              className={'button button-solid'}
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
