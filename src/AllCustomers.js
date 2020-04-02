import React, { Component } from 'react'
import Customer from './Customer'

export default class AllCustomers extends Component {
    static defaultProps = {
        title: 'Boring Co. Customers'
    }

    componentDidUpdate(prevProps) {
        if (prevProps.customer !== this.props.customer){
            console.log('Customer changed: from:', prevProps.customer, 'to:', this.props.customer)
        }

        if (prevProps.customers !== this.props.customers) {
            console.log('Customers changed from->to', prevProps.customers, this.props.customers)
        }
    }

    createCustomers = () => {
        if (!this.props.customers.length) {
            return (
                <p>Loading Customers...</p>
            )
        }

        const customersAsComponents = this.props.customers
            .map(customer => (
                <li key={customer._id}><Customer name={customer.name} /></li>
            ))

        return customersAsComponents
    }

    render() {
        console.log('Step 5: Pass this.props.customer.name to Customer', this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    {this.createCustomers()}
                </ul>
            </div>
        )
    }
}