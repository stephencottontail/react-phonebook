import type { Dispatch, SetStateAction } from 'react'
import type { Contact } from '../types'

interface Props {
  active: number;
  contacts: Contact[];
  setContacts: Dispatch<SetStateAction<Contact[]>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

export function Form({active, contacts, setContacts, setIsEditing}: Props) {
  let temp: Contact = {}
  const address: Contact= contacts[active]

  function handleCancel() {
    setIsEditing(false)
  }

  function handleSave(e: React.SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault()

    contacts[active] = { ...contacts[active], ...temp }
    setContacts(contacts)
    setIsEditing(false)
  }

  return (
    <form>
      <label>
        <span>Name</span>
        <input
          type='text'
          value={address.name}
          onChange={ (e) => {
            temp = {
              ...temp,
              name: e.target.value
            }
          }}
        />
      </label>
      <label>
        <span>Telephone</span>
        <input
          type='tel'
          value={address.telephone}
          onChange={ (e) => {
            temp = {
              ...temp,
              telephone: e.target.value
            }
          }}
        />
      </label>
      <label>
        <span>Street</span>
        <textarea
          value={address.street}
          onChange={ (e) => {
            temp = {
              ...temp,
              street: e.target.value
            }
          }}
        />
      </label>
      <label>
        <span>City</span>
        <input
          type='text'
          value={address.city}
          onChange={ (e) => {
            temp = {
              ...temp,
              city: e.target.value
            }
          }}
        />
      </label>
      <label>
        <span>State</span>
        <input
          type='text'
          value={address.state}
          onChange={ (e) => {
            temp = {
              ...temp,
              state: e.target.value
            }
          }}
        />
      </label>
      <label>
        <span>Zip</span>
        <input
          type='text'
          value={address.zip}
          onChange={ (e) => {
            temp = {
              ...temp,
              zip: e.target.value
            }
          }}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type='email'
          value={address.email}
          onChange={ (e) => {
            temp = {
              ...temp,
              email: e.target.value
            }
          }}
        />
      </label>
      <div>
        <button
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </form>
  )
}
