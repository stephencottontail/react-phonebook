import { Contact } from './contact/'

function App() {
  const className = 'phonebook'
  console.log(Contact)

  return (
    <div className={ className}>
      <Contact />
    </div>
  )
}

export default App
