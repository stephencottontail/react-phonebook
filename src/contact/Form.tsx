import type { Dispatch, SetStateAction } from 'react'
import type { Contact } from '../types'
import { verifyObject } from '../utils'

interface Props {
  active: number;
  contacts: Array<Contact>;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

export function Form({active, contacts, setContacts, setIsEditing}: Props) {
  const address: Contact= contacts[active]

  function handleCancel() {
    setIsEditing(false)
  }

  function editContact(formData: FormData) {
    let temp: Omit<Contact, 'entries'> = {
      name: formData.get('name') as string,
      telephone: formData.get('telephone') as string,
      street: formData.get('street') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      zip: formData.get('zip') as string,
      email: formData.get('email') as string,
    }

    contacts[active] = { ...contacts[active], ...temp }
    setContacts(contacts)
    setIsEditing(false)
  }

  return (
    <form action={editContact}>
      <label>
        <span>Name</span>
        <input
          name='name'
          type='text'
          defaultValue={address.name ?? ''}
        />
      </label>
      <label>
        <span>Telephone</span>
        <input
          name='telephone'
          type='tel'
          defaultValue={address.telephone ?? ''}
        />
      </label>
      <label>
        <span>Street</span>
        <textarea
          name='street'
          defaultValue={address.street ?? ''}
        />
      </label>
      <label>
        <span>City</span>
        <input
          name='city'
          type='text'
          defaultValue={address.city  ?? ''}
        />
      </label>
      <label>
        <span>State</span>
        <input
          name='state'
          type='text'
          defaultValue={address.state ?? ''}
        />
      </label>
      <label>
        <span>Zip</span>
        <input
          name='zip'
          type='text'
          defaultValue={address.zip ?? ''}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          name='email'
          type='email'
          defaultValue={address.email ?? ''}
        />
      </label>
      <div>
        <button
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button>
          Save
        </button>
      </div>
    </form>
  )
}
