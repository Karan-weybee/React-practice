import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      
      <div className='mb-2'>Context Api</div>

      <Login />
    </UserContextProvider>
  )
}

export default App
