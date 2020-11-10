import React, { useState } from 'react'


export default function Login() {
    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')
    

    return (
        <div>
            Login Here
            <br></br>
            <br></br>
        <form>
            <label for="fname">Username:</label>
            <input type="text" id="fname" name="fname"/><br></br>
            <label for="lname">Password:</label>
            <input type="password" id="lname" name="lname" />
        </form>
        </div>
    )
}
