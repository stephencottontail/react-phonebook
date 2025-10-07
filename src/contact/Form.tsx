import type { Dispatch, SetStateAction } from 'react'
import type { Contact } from '../types'
import { baseClassName } from '../constants'

interface Props {
  active: number;
  contacts: Array<Contact>;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

export function Form({active, contacts, setContacts, setIsEditing}: Props) {
  const baseClass = `${baseClassName}__form`
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
    <form className={`${baseClass}`} action={editContact}>
      <label className='double'>
        <span className={`${baseClassName}__label`}>Name</span>
        <input
          className={`${baseClassName}__content`}
          name='name'
          type='text'
          defaultValue={address.name ?? ''}
        />
      </label>
      <label className='double'>
        <span className={`${baseClassName}__label`}>Telephone</span>
        <input
          className={`${baseClassName}__content`}
          name='telephone'
          type='tel'
          defaultValue={address.telephone ?? ''}
        />
      </label>
      <label className='triple'>
        <span className={`${baseClassName}__label`}>Street</span>
        <input
          className={`${baseClassName}__content`}
          name='street'
          defaultValue={address.street ?? ''}
        />
      </label>
      <label className='triple'>
        <span className={`${baseClassName}__label`}>City</span>
        <input
          className={`${baseClassName}__content`}
          name='city'
          type='text'
          defaultValue={address.city  ?? ''}
        />
      </label>
      <label className='triple'>
        <span className={`${baseClassName}__label`}>State</span>
        <input
          className={`${baseClassName}__content`}
          name='state'
          type='text'
          defaultValue={address.state ?? ''}
        />
      </label>
      <label className='double'>
        <span className={`${baseClassName}__label`}>Zip</span>
        <input
          name='zip'
          type='text'
          defaultValue={address.zip ?? ''}
        />
      </label>
      <label className='double'>
        <span className={`${baseClassName}__label`}>Email</span>
        <input
          className={`${baseClassName}__content`}
          name='email'
          type='email'
          defaultValue={address.email ?? ''}
        />
      </label>
      <div className={`${baseClassName}__buttons full`}>
        <button
          className={'button'}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button className={'button button-solid'}>
          Save
        </button>
      </div>
    </form>
  )
}
