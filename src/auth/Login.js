import React, {useState} from 'react'
import axios from 'axios';

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginErrors, setLoginErrors] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:3001/sessions", {user: {username, password}}, { withCredentials: true })
        .then(response => {
            console.log("res from login ", response)
        })
        .catch(error => {
            console.log("login error: ", error)
        })
    }

    const handleUsernameChange = e => setUsername(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input name="username" placeholder="Enter Username" value={username} onChange={handleUsernameChange} required />
                <input type="password" name="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} required />

                <button type="submit"> Login </button>

            </form>
        </div>
    )
}
