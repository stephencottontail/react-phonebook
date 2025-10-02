import type { Entry } from '../types'

export function Journal({ entries }: Entry[]) {
  const locale = 'en-US' // problematically assumo user locale
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className='journal'>
      { entries.map((el: Entry, i: number) => (
        <article
          key={`journal-${i}`}
        >
          <header>
            <p>{el.date.toLocaleDateString(locale, options)}</p>
          </header>
          <p>{el.content}</p>
        </article>
      ))}
    </div>
    )
}
