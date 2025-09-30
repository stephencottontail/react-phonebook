import { useState } from 'react'
import type { FC } from 'react'
import { setInitialState } from '../utils/setInitialState'

export function Contact(): FC {
  console.log(setInitialState())
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
              <p></p>
            </div>
            <div>
              <p>City</p>
              <p></p>
            </div>
            <div>
              <p>State</p>
              <p></p>
            </div>
            <div>
              <p>Zip</p>
              <p></p>
            </div>
            <div>
              <p>Email</p>
              <p></p>
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
