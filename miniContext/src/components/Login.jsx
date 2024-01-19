import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import Profile from './Profile'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser}= useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
    }
    return (
        <>
        <div className='bg-slate-500 p-4 text-white'>
            <h2 className='font-bold'>Login</h2>
            <input type='text' placeholder='username' 
            value={username}
            className='m-2 p-1.5 text-black'
            onChange={(e)=>setUsername(e.target.value)}
            />
            <input type='text' placeholder='password' 
             value={password}
             className='m-2 p-1.5 text-black'
             onChange={(e)=>setPassword(e.target.value)}/>
            <button 
            className='bg-red-500 p-1.5 '
            onClick={handleSubmit}>Submit</button>
        </div>
        <Profile />
        </>
    )
}
export default Login;