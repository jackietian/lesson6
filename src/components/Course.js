import { useParams } from "react-router-dom"

export default (props) => {
    console.log(props)
    const { courseId } = useParams()
    return <h1>Course ID: {courseId} </h1>
}