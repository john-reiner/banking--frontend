import React, { useState } from 'react'



export default function Home() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleUsernameChange = e => setUsername(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        console.log('username is set to ' + username)
    }



    return (
        <div>
            Login Here
            <br></br>
            <br></br>
        <form onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" onChange={handleUsernameChange}/><br></br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" /><br></br>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}
