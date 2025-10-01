import type { Entry } from './entry'

export interface Contact {
  name: string;
  telephone: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  email?: string;
  entries?: Entry[];
}
