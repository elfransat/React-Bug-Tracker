import React from 'react'
import '../../scss/style.scss'
import bugModel from '../../Models/bugModel'

export default (props) => {
    const bug = new bugModel(props.bug)
    return (
        <div className='bug-view'>
            <h1>{bug.name}</h1>
            <viewSection title='Details' info={bug.details}></viewSection>
            <viewSection title='Steps' info={bug.steps}></viewSection>
            <viewSection title='Priority' info={bug.priority}></viewSection>
            <viewSection title='Creater' info={bug.creator}></viewSection>
            <viewSection title='App Version' info={bug.version}></viewSection>
            <viewSection title='Time Created' info={bug.created}></viewSection>

        </div>
    )

}