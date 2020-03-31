import React, { Component } from 'react'
import Customer from './Customer'

export default class AllCustomers extends Component {
    static defaultProps = {
        title: 'Boring Co. Customers'
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    <li><Customer name="Danny" /></li>
                    <li><Customer name="Billy Bob" /></li>
                    <li><Customer name="Jonathan" /></li>
                </ul>
            </div>
        )
    }
}