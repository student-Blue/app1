import React from 'react';
import { userContext } from './context'
import Context2 from './context-contents2';
import Header2 from './context-header2';
export default function App() {
  let [user, setUser] = React.useState()
  return (
    <userContext.Provider value={[user, setUser]}>
      <Header2 />
      <Context2 />
    </userContext.Provider>
  )
}