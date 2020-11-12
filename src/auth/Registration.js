import React, {useState} from 'react'
import axios from 'axios';

export default function Registration() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setpasswordConfirmation] = useState("")
    const [registrationErrors, setRegistrationErrors] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:3001/registrations", {user: {username, password, password_confirmation}}, { withCredentials: true })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleUsernameChange = e => setUsername(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    const handlePasswordConfirmationChange = e => setpasswordConfirmation(e.target.value)

    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input name="username" placeholder="Enter Username" value={username} onChange={handleUsernameChange} required />
                <input type="password" name="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} required />
                <input type="password" name="password confirmation" placeholder="Enter password confirmation" value={password_confirmation} onChange={handlePasswordConfirmationChange} required />

                <button type="submit"> Register </button>

            </form>
        </div>
    )
}
