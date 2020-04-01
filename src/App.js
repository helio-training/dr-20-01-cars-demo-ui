import React from 'react'
import AllCustomers from './AllCustomers'
import NewCustomer from './NewCustomer'
import './App.css'

export default class App extends React.Component {
  state = {
    customerData: { name: 'No customer saved' }
  }

  saveCustomer = (customerToSave) => {
    console.log('Step 3: save NewCustomer data in App via setState', 'state:', this.state, 'customerToSave:', customerToSave)
    this.setState({ customerData: customerToSave })
  }

  render() {
    console.log('Step 4: pass this.state.customerData to AllCustomers', this.state)
    return (
      <div className="App">
        <AllCustomers title="Danny's Car Shop"
                      customer={this.state.customerData} />
        <NewCustomer save={this.saveCustomer} />
      </div>
    )
  }
}
