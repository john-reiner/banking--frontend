import React from 'react'

export default function DashBoard(props) {
    return (
        <div>
            <h1>Dashboard</h1>
            <h1>Status: {props.loggedInStatus}</h1>
        </div>
    )
}
