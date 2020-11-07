import { Link, NavLink } from 'react-router-dom'
import './Home.css'
export default () => {
    return <>
        <header>
            LMS
            <nav>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <li><NavLink to="/logout">Log out</NavLink></li>
            </nav>
        </header>
        <main>
            <h1>Home</h1>
        </main>
    </>
}