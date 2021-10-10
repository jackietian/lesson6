import { useEffect } from "react"

import { logout } from '../service/auth'

export default function(props) {
    useEffect(() => {
        logout()
        props.history.replace('/')
    })
    return <h1>Logout</h1>
}