import { useState } from 'react'
import type { Contact } from '../types/'
import { baseClassName } from '../constants'
import { Display, Form, Journal } from '../contact'
import { setInitialState } from '../utils/'

export function Contact() {
  const [contacts, setContacts] = useState(setInitialState)
  const [isEditing, setIsEditing] = useState<number | false>(false)
  const [active, setActive] = useState(contacts.length - 1)

  return (
    <>
      <div
        className={`${baseClassName}__buttons`}
      >
        <button
          className={'button button-solid'}
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
            setIsEditing(newContacts.length - 1)
          }}
        >
          Add New
        </button>
      </div>
      { contacts && contacts.map((el, i) => {
        const isActive = i == active

        return (
          <div
            className={`${baseClassName}__header ${isEditing == i ? 'header-editing' : ''} ${isActive ? 'header-active' : ''}`}
            key={`header-${i}`}
          >
            <div>
              <h2 className={`${baseClassName}__header__title`}>{el.name}</h2>
              <p className={`${baseClassName}__header__subtitle`}>{el.telephone}</p>
            </div>
            <div
              className={`${baseClassName}__buttons`}
            >
              { ! isEditing && (
                <>
                  <button
                    className={`button button-solid ${isActive ? 'button-active' : ''}`}
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
                    className={'button button-solid'}
                    onClick={ () => {
                      setActive(i)
                      setIsEditing(i)
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
