import React from 'react'
import HookUseState from '../components/HookUseState'
import HooksUseReducer from '../components/HooksUseReducer'
import HookUseEffect from '../components/HookUseEffect'

const Home = () => {

  return (
    <div>
      <HookUseState />
      <HooksUseReducer />
      <HookUseEffect />
    </div>
  )
}

export default Home