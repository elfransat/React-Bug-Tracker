import React from 'react'
import '../../../scss/style.scss'
import { useSelector } from 'react-redux'

export const SingleBugPage = ({ match }) => {
    const { _id } = match.params

    const post = useSelector(state =>
        state.bugs.find(bug => bug._id === bug._id)
    )
}


export default (props) => {




    if (!bug) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="viewSection">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </article>
        </section>
    )

}