import type { Contact } from '../types'

interface Props {
  address: Contact;
}

export function Display({address}: Props) {

  return (
    <>
      <div className='address'>
        { address.street && (
          <div>
            <p>Street</p>
            <p>{address.street}</p>
          </div>
        )}
        { address.city && (
          <div>
            <p>City</p>
            <p>{address.city}</p>
          </div>
        )}
        { address.state && (
          <div>
            <p>State</p>
            <p>{address.state}</p>
          </div>
        )}
        { address.zip && (
          <div>
            <p>Zip</p>
            <p>{address.zip}</p>
          </div>
        )}
        { address.email && (
          <div>
            <p>Email</p>
            <p>{address.email}</p>
          </div>
        )}
      </div>
    </>
  )
}

