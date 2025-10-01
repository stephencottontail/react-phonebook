import { useState } from 'react'
import type { FC } from 'react'
import { Contact } from './contact/'

function App(): FC {
  const className = 'phonebook'
  console.log(Contact)

  return (
    <div className={ className}>
      <Contact />
    </div>
  )
}

export default App
