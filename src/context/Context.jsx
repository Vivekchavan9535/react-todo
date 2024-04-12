import React, { createContext, useState } from 'react'


export const userContext = createContext()
function Context(props) {
  const [users, setusers] = useState([
    { id: 0, name: 'Jhon cena', city: 'America' },
    { id: 1, name: 'vivek', city: 'Wadi' }

  ]




  )
  return <userContext.Provider value={{ users, setusers }}>{props.children}</userContext.Provider>;
}

export default Context