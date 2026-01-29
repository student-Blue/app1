import React from 'react';
import { userContext } from './context'
import Context from './context-contents';
export default function App() {
  return (
    <userContext.Provider value={'Arunburapha'}>
      <Context />
    </userContext.Provider>
  )
}