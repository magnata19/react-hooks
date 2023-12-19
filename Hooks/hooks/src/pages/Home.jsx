import React from 'react'
import HookUseState from '../components/HookUseState'
import HooksUseReducer from '../components/HooksUseReducer'
import HookUseEffect from '../components/HookUseEffect'

//useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'

const Home = () => {

  const {contextValue} = useContext(SomeContext)

  return (
    <div>
      <HookUseState />
      <HooksUseReducer />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
    </div>
  )
}

export default Home