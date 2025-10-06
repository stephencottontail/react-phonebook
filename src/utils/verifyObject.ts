import type { Contact } from '../types'

export function verifyObject(obj: Partial<Contact>): obj is Omit<Contact, "entries"> {
  return typeof obj.name === 'string' &&
    typeof obj.telephone === 'string' &&
    typeof obj.street === 'string' &&
    typeof obj.city === 'string' &&
    typeof obj.state === 'string' &&
    typeof obj.zip === 'string'&&
    typeof obj.email === 'string'
}
