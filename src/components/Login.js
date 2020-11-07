import { useEffect } from 'react'
import { login, isAuthenticated } from '../service/auth'

export default function({history}){
    useEffect(() => {
        if(isAuthenticated()) history.replace('/home')
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        login()
        history.replace('/home')
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" name="name"/>
        <input type="password" name="password"/>
        <button>cancel</button>
        <button type="submit">Submit</button>
    </form>
}