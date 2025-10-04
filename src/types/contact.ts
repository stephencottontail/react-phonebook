import type { Entry } from './entry'

export interface Contact {
  name: string | null;
  telephone: string | null;
  street: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  email: string | null;
  entries: Entry[] | null;
}
