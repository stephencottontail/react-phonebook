import { useState } from 'react'
import type { FC } from 'react'
import { setInitialState } from '../utils/'

export function Contact(): FC {
  const [contacts, setContacts] = useState(setInitialState)
  const [active, setActive] = useState(-1)

  return (
    <>
      { contacts && contacts.map((el, i) => {
        const isActive = i == active

        return (
          <button
            key={`toggle-${i}`}
            className={`toggle ${isActive ? 'is-active' : ''}`}
            onClick={ () => {
              if (active == i) {
                setActive(-1)
              } else {
                setActive(i)
              }
            }}
          >
            <p>{el.name}</p>
            <p>{el.telephone}</p>
          </button>
        )
      })}
      <div className='address'>
        { contacts[active]?.street && (
          <div>
            <p>Street</p>
            <p>{contacts[active].street}</p>
          </div>
        )}
        { contacts[active]?.city && (
          <div>
            <p>City</p>
            <p>{contacts[active].city}</p>
          </div>
        )}
        { contacts[active]?.state && (
          <div>
            <p>State</p>
            <p>{contacts[active].state}</p>
          </div>
        )}
        { contacts[active]?.zip && (
          <div>
            <p>Zip</p>
            <p>{contacts[active].zip}</p>
          </div>
        )}
        { contacts[active]?.email && (
          <div>
            <p>Email</p>
            <p>{contacts[active].email}</p>
          </div>
        )}
      </div>
      { contacts[active]?.entries && (
        <div className='journal'>
          { contacts[active].entries.map((el, i) => (
            <article
              key={`journal-${i}`}
            >
              <header>
                <p>{el.date}</p>
              </header>
              <p>{el.content}</p>
            </article>
          ))}
        </div>
      )}
    </>
  )
}
