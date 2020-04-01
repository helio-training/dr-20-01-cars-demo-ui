import React, { Component } from 'react'

export default class NewCustomer extends Component {
    state = {
        name: ''
    }

    handleChange = (event) => {
        console.log('Step 1: Save user input via setState', event.target.value)
        this.setState({ name: event.target.value })
    }

    handleClick = () => {
        console.log('Step 2: Call this.props.save on click', this.state)
        this.props.save(this.state)
    }

    render() {
        return (
            <div>
                <h1>New Customer Form</h1>
                <div>
                    <label htmlFor="name-input">Name:</label>
                    <input id="name-input"
                           type="text"
                           value={this.state.name}
                           onChange={this.handleChange} />
                </div>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}