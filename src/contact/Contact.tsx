import { useState } from 'react'
import type { FC } from 'react'

export function Contact(): FC {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <details>
      <summary
        onClick={ () =>{
          setIsExpanded(!isExpanded)
        }}
      >
        <p>Jessica Kim</p>
        <p>(555) 555-5555</p>
      </summary>
      { isExpanded && (
        <div>
          <div className='address'>
            <div>
              <p>Street</p>
              <p>122 East 9th Street</p>
            </div>
            <div>
              <p>City</p>
              <p>Mobile</p>
            </div>
            <div>
              <p>State</p>
              <p></p>
            </div>
            <div>
              <p>Zip</p>
              <p>36525</p>
            </div>
            <div>
              <p>Email</p>
              <p>jessica@example.org</p>
            </div>
          </div>
          <div class name='journal'>
            <p>Hello from the journal!</p>
          </div>
        </div>
      ) }
    </details>
  )
}
