import { useState } from 'react'
import type { Contact } from '../types/'
import { setInitialState } from '../utils/'
import { Display } from './Display.tsx'
import { Form } from './Form.tsx'
import { Journal } from './Journal.tsx'

export function Contact() {
  const [isEditing, setIsEditing] = useState(false)
  const [contacts, setContacts] = useState(setInitialState)
  const [active, setActive] = useState(contacts.length - 1)

  return (
    <>
      <div>
        <button
          onClick={ () => {
            const newContact: Contact = {
              name: '',
              telephone: '',
              street: '',
              city: '',
              state: '',
              zip: '',
              email: '',
              entries: []
            }
            const newContacts: Array<Contact> = [
              ...contacts,
              newContact
            ]

            setContacts(newContacts)
            setActive(newContacts.length - 1)
            setIsEditing(true)
          }}
        >
          Add New
        </button>
      </div>
      { contacts && contacts.map((el, i) => {
        const isActive = i == active

        return (
          <div
            key={`header-${i}`}
          >
            <p>{el.name}</p>
            <p>{el.telephone}</p>
            <div>
              { ! isEditing && (
                <>
                  <button
                    className={`toggle ${isActive ? 'is-active' : ''}`}
                    onClick={ () => {
                      if (active == i) {
                        setActive(-1)
                      } else {
                        setActive(i)
                      }
                    }}
                  >
                    { isActive ? 'Hide' : 'Show' }
                  </button>
                  <button
                    onClick={ () => {
                      setIsEditing(true)
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        )
      })}
      { active != -1
        ? isEditing
          ? (
            <Form
              active={active}
              contacts={contacts}
              setContacts={setContacts}
              setIsEditing={setIsEditing}
            />
          )
          : <Display address={contacts[active]} />
        : null
      }
      { active != -1 && (
        <Journal
          active={active}
          contacts={contacts}
          setContacts={setContacts}
          entries={contacts[active]['entries']}
        />
      )}
    </>
  )
}
