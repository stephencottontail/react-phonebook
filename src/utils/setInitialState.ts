import type { Contact, Entry } from '../types'

interface FirstNames {
  uppercase: string;
  lowercase: string;
}

const firstNames = [
  { uppercase: "Jessica", lowercase: "jessica" },
  { uppercase: "Rebecca", lowercase: "rebecca" },
  { uppercase: "Norah", lowercase: "norah" },
  { uppercase: "Sandra", lowercase: "sandra" },
]

const lastNames = [
  'Kim',
  'McDonald',
  'Sturgis',
  'Fox',
  'Watson',
  'Simms',
  'Sosa',
]

const addresses = [
  { street: "122 East 9th Street", city: "Mobile", state: "AL", zip: "36525" },
  { street: "1001 Washington Rd", city: "Chicago", state: "IL", zip: "60007" },
  { street: "990 Pine Blvd", city: "Sacramento", state: "CA", zip: "94203" },
  { street: "42421 W 11th St", city: "Ft Lauderdale", state: "FL", zip: "33303" },
  { street: "668 Lincoln Pkwy", city: "Minneapolis", state: "MN", zip: "55401" },
  { street: "3553 Maple Road", city: "Gary", state: "IN", zip: "46401" },
]

function getFirstName(): FirstNames {
  const i = Math.floor(Math.random() * 4)

  return firstNames[i]
}

function getLastName(): string {
  const i = Math.floor(Math.random() * 6)

  return lastNames[i]
}

function getAddress(): Partial<Contact> {
  const i = Math.floor(Math.random() * 6)

  return addresses[i]
}

function makeAddresses(firstName: Array<FirstNames>, lastName: Array<string>): Array<Partial<Contact>> {
  const addresses = [
    getAddress(),
    getAddress(),
  ]
  const first: Partial<Contact> = { name: `${firstName[0].uppercase} ${lastName[0]}`, telephone: '(555) 409-2304', email: `${firstName[0].lowercase}@example.org`, ...addresses[0] }
  const second: Partial<Contact> = { name: `${firstName[1].uppercase} ${lastName[1]}`, telephone: '(555) 409-2304', email: `${firstName[1].lowercase}@example.org`, ...addresses[1] }

  return [first, second]
}

function makeEntries(names: Array<string>): Array<Entry[]> {
  const first: Entry[] = [
    {
      date: new Date(new Date().setDate(new Date().getDate() - 10)),
      content: `I met ${names[0]} at this extremely expensive sandwich shop because I really feel like I do my best work when spending $55 for a sandwhich and a drink. As soon as ${names[0]} heard about this idea, we both agreed we had a winner. I immediately ran out to buy another Louise Carmen Honore notebook for this idea.`,
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - 4)),
      content: 'Over the next week we discussed the implementation details. We both agreed that a simple demo version would not need to save anything and could use some generic data. We were both so excited by the prospect of making a simple demo for this idea that we rewarded ourselves with the fanciest steak and lobster dinner we could find.',
    },
  ]
  const second: Entry[] = [
    {
      date: new Date(new Date().setDate(new Date().getDate() - 6)),
      content: `I wanted to get a second opinion on this idea before I bought a second MacBook that would be used only to develop this idea, so ${names[1]} and I went out for artisanal Oreos and Dr Pepper. As soon as I described this idea, her wide smile told me I was on the right track.`
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - 1)),
      content: 'I showed her this design that I had painstakingly sketched out in my Louise Carmen Honore notebook and she immediately gave her stamp of approval. She tried to literally give a stamp of approval, but there was no way I could allow anyone, even my closest friends, to touch my Louise Carmen Honore notebook.'
    },
  ]

  return [first, second]
}

function verifyObject(obj: Partial<Contact>): obj is Omit<Contact, "entries"> {
  return typeof obj.name === 'string' &&
    typeof obj.telephone === 'string' &&
    typeof obj.street === 'string' &&
    typeof obj.city === 'string' &&
    typeof obj.state === 'string' &&
    typeof obj.zip === 'string'&&
    typeof obj.email === 'string'
}

export function setInitialState(): Array<Contact> {
  let data: Array<Contact> = []
  const firstNames = [
    getFirstName(),
    getFirstName(),
  ]
  const lastNames = [
    getLastName(),
    getLastName(),
  ]
  const entries = makeEntries([firstNames[0].uppercase, firstNames[1].uppercase])
  const addresses = makeAddresses(firstNames, lastNames)

  if (verifyObject(addresses[0])) {
    const first: Contact = {
      name: addresses[0].name,
      telephone: addresses[0].telephone,
      street: addresses[0].street,
      city: addresses[0].city,
      state: addresses[0].state,
      zip: addresses[0].zip,
      email: addresses[0].email,
      entries: entries[0],
    }

    data.push(first)
  }

  if (verifyObject(addresses[1])) {
    const second: Contact = {
      name: addresses[1].name,
      telephone: addresses[1].telephone,
      street: addresses[1].street,
      city: addresses[1].city,
      state: addresses[1].state,
      zip: addresses[1].zip,
      email: addresses[1].email,
      entries: entries[1],
    }

    data.push(second)
  }

  return data
}
