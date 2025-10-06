import type { Contact } from '../types'
import { baseClassName } from '../constants'

interface Props {
  address: Contact;
}

export function Display({address}: Props) {
  const baseClass = `${baseClassName}__address`

  return (
    <div className={`${baseClass} grid`}>
      { address.street && (
        <div className='double'>
          <p className={`${baseClassName}__label`}>Street</p>
          <p className={`${baseClassName}__content`}>{address.street}</p>
        </div>
      )}
      { address.city && (
        <div>
          <p className={`${baseClassName}__label`}>City</p>
          <p className={`${baseClassName}__content`}>{address.city}</p>
        </div>
      )}
      { address.state && (
        <div>
          <p className={`${baseClassName}__label`}>State</p>
          <p className={`${baseClassName}__content`}>{address.state}</p>
        </div>
      )}
      { address.zip && (
        <div>
          <p className={`${baseClassName}__label`}>Zip</p>
          <p className={`${baseClassName}__content`}>{address.zip}</p>
        </div>
      )}
      { address.email && (
        <div className='double'>
          <p className={`${baseClassName}__label`}>Email</p>
          <p className={`${baseClassName}__content`}>{address.email}</p>
        </div>
      )}
    </div>
  )
}

