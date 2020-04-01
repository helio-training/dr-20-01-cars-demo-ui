import React from 'react'

export default (props) => {
    console.log('Step 6: use props.name to display customer name', props)
    return (
        <div>
            {props.name}
        </div>
    )
}
