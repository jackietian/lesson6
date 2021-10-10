import { Route, Link, NavLink } from 'react-router-dom'
import Course from "./Course"

export default ({ match }) => {
    return <section>
        <h1>Courses</h1>
        <ul>
            <li><NavLink to={`${match.path}/js`}>JS</NavLink></li>
            <li><NavLink to={`${match.path}/html`}>HTML</NavLink></li>
            <li><NavLink to={`${match.path}/css`}>CSS</NavLink></li>
        </ul>
        <Route path={`${match.path}/:courseId`} component={Course} />
    </section>
}