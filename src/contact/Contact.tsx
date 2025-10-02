import { useState } from 'react'
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
      { contacts[active].entries
        ? <Journal entries={contacts[active].entries} />
        : null
      }
    </>
  )
}
