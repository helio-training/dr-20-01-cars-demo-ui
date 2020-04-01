import React, { Component } from 'react'
import Customer from './Customer'

export default class AllCustomers extends Component {
    static defaultProps = {
        title: 'Boring Co. Customers'
    }

    render() {
        console.log('Step 5: Pass this.props.customer.name to Customer', this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    <li><Customer name={this.props.customer.name} /></li>
                    <li><Customer name="Danny" /></li>
                    <li><Customer name="Billy Bob" /></li>
                    <li><Customer name="Jonathan" /></li>
                </ul>
            </div>
        )
    }
}